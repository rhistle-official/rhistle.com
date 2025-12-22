import DOMPurify from 'isomorphic-dompurify';

/**
 * HTML 콘텐츠를 안전하게 Sanitize합니다.
 * XSS 공격을 방지하기 위해 위험한 태그와 속성을 제거합니다.
 */
export function sanitizeHtml(dirty: string): string {
  return DOMPurify.sanitize(dirty, {
    // 허용할 태그 목록
    ALLOWED_TAGS: [
      'p', 'br', 'strong', 'em', 'u', 's', 'strike',
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'ul', 'ol', 'li',
      'a', 'img',
      'blockquote', 'pre', 'code',
      'div', 'span',
      'table', 'thead', 'tbody', 'tr', 'th', 'td',
    ],
    // 허용할 속성 목록
    ALLOWED_ATTR: [
      'href', 'title', 'alt', 'src',
      'class', 'style',
      'width', 'height',
      'target', 'rel',
    ],
    // data-* 속성 허용 안 함
    ALLOW_DATA_ATTR: false,
    // style 속성의 위험한 CSS 제거
    FORBID_TAGS: ['script', 'iframe', 'object', 'embed', 'form', 'input', 'button'],
    FORBID_ATTR: ['onerror', 'onload', 'onclick', 'onmouseover', 'onfocus', 'onblur'],
    // URL 프로토콜 제한
    ALLOWED_URI_REGEXP: /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|data):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
  });
}

