import { FC, useState, useCallback } from 'react';
import { STButton } from 'sillytavern-utils-lib/components/react';
import { WIEntry } from 'sillytavern-utils-lib/types/world-info';
import { ResponseFormat } from '../settings.js';
import { parseLorebookResponse } from '../parsers.js';
import { highlightXml, highlightJson } from '../utils/syntax-highlight.js';

interface ParseFixerPopupProps {
  rawContent: string;
  format: ResponseFormat;
  errorMessage: string;
  previousContent?: string;
  onAccept: (parsedEntries: Record<string, WIEntry[]>) => void;
  onAcceptRaw: (rawContent: string) => void;
  onCancel: () => void;
}

export const ParseFixerPopup: FC<ParseFixerPopupProps> = ({
  rawContent,
  format,
  errorMessage,
  previousContent,
  onAccept,
  onAcceptRaw,
  onCancel,
}) => {
  const [editedContent, setEditedContent] = useState(rawContent);
  const [currentError, setCurrentError] = useState<string>(errorMessage);
  const [viewMode, setViewMode] = useState<'editor' | 'preview'>('editor');
  const [isRetrying, setIsRetrying] = useState(false);

  const handleRetryParse = useCallback(() => {
    setIsRetrying(true);
    try {
      const result = parseLorebookResponse(editedContent, format, { previousContent });
      if (Object.keys(result).length === 0) {
        setCurrentError('Parsing succeeded but returned no entries. The response may be empty or malformed.');
        setIsRetrying(false);
        return;
      }
      onAccept(result);
    } catch (error: any) {
      setCurrentError(error instanceof Error ? error.message : String(error));
    } finally {
      setIsRetrying(false);
    }
  }, [editedContent, format, previousContent, onAccept]);

  const handleFormatContent = useCallback(() => {
    try {
      if (format === 'json') {
        const parsed = JSON.parse(editedContent);
        setEditedContent(JSON.stringify(parsed, null, 2));
        setCurrentError('');
      } else {
        setCurrentError('Auto-formatting is available for JSON only. For XML, please fix manually.');
      }
    } catch {
      setCurrentError('Cannot auto-format: content is not valid ' + format.toUpperCase());
    }
  }, [editedContent, format]);

  const highlightedPreview =
    viewMode === 'preview' ? (format === 'xml' ? highlightXml(editedContent) : highlightJson(editedContent)) : '';

  return (
    <div className="parse-fixer-popup">
      <div className="fixer-header">
        <h3>Parse Error — Fix Response</h3>
        <span className="format-badge">{format.toUpperCase()}</span>
      </div>

      {currentError && <div className="error-banner">{currentError}</div>}

      <p className="hint-text">
        The LLM response could not be parsed. Edit the content below to fix any errors, then retry parsing.
      </p>

      <div className="view-toggle">
        <STButton
          className={`menu_button ${viewMode === 'editor' ? 'selected' : ''}`}
          onClick={() => setViewMode('editor')}
        >
          Editor
        </STButton>
        <STButton
          className={`menu_button ${viewMode === 'preview' ? 'selected' : ''}`}
          onClick={() => setViewMode('preview')}
        >
          Preview
        </STButton>
        <STButton
          className="menu_button"
          onClick={handleFormatContent}
          disabled={format === 'xml'}
          title="Auto-format the content (JSON only)"
        >
          <i className="fa-solid fa-align-left"></i> Format
        </STButton>
      </div>

      {viewMode === 'editor' ? (
        <textarea
          className="editor-area text_pole"
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
          spellCheck={false}
        />
      ) : (
        <div className="preview-area" dangerouslySetInnerHTML={{ __html: highlightedPreview }} />
      )}

      <div className="fixer-buttons">
        <STButton className="menu_button" onClick={onCancel}>
          Cancel
        </STButton>
        <STButton
          className="menu_button"
          onClick={() => onAcceptRaw(editedContent)}
          title="Accept the raw text as entry content (no parsing)"
        >
          Accept as Raw
        </STButton>
        <STButton className="menu_button interactable" onClick={handleRetryParse} disabled={isRetrying}>
          {isRetrying ? 'Parsing...' : 'Retry Parse'}
        </STButton>
      </div>
    </div>
  );
};
