const MAX_HIGHLIGHT_LENGTH = 10000;
const TRUNCATION_NOTICE = '\n...(truncated)';

function truncateText(text: string): string {
  return text.length > MAX_HIGHLIGHT_LENGTH ? `${text.slice(0, MAX_HIGHLIGHT_LENGTH)}${TRUNCATION_NOTICE}` : text;
}

function escapeHtml(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export function highlightXml(text: string): string {
  const escapedText = escapeHtml(truncateText(text));

  return escapedText.replace(/&lt;!--[\s\S]*?--&gt;|&lt;!\[CDATA\[[\s\S]*?\]\]&gt;|&lt;[^&]*?&gt;/g, (token) => {
    if (token.startsWith('&lt;!--') || token.startsWith('&lt;![CDATA[')) {
      return `<span class="syn-comment">${token}</span>`;
    }

    return token
      .replace(/^(&lt;\/?)([\w:-]+)/, `$1<span class="syn-tag">$2</span>`)
      .replace(
        /([\w:-]+)(=)(&quot;.*?&quot;)/g,
        '<span class="syn-attr">$1</span><span class="syn-punctuation">$2</span><span class="syn-string">$3</span>',
      )
      .replace(/&lt;\/?/g, '<span class="syn-punctuation">$&</span>')
      .replace(/\/?&gt;/g, '<span class="syn-punctuation">$&</span>');
  });
}

export function highlightJson(text: string): string {
  const escapedText = escapeHtml(truncateText(text));

  return escapedText
    .replace(/(^|\n)(\s*)(\/\/.*|\/\*[\s\S]*?\*\/)/g, (_full, prefix, indent, comment) => {
      return `${prefix}${indent}<span class="syn-comment">${comment}</span>`;
    })
    .replace(/("(?:\\.|[^"\\])*")(\s*:)/g, '<span class="syn-key">$1</span><span class="syn-punctuation">$2</span>')
    .replace(/(:\s*)("(?:\\.|[^"\\])*")/g, '$1<span class="syn-string">$2</span>')
    .replace(/(:\s*)(-?\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b)/g, '$1<span class="syn-number">$2</span>')
    .replace(/(:\s*)(true|false|null)\b/g, '$1<span class="syn-number">$2</span>')
    .replace(/([{}\[\]])/g, '<span class="syn-bracket">$1</span>');
}
