/* @ds-bundle: {"format":4,"namespace":"OACDesignSystem_d73471","components":[{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"SectionHeader","sourcePath":"components/display/SectionHeader.jsx"},{"name":"Tabs","sourcePath":"components/display/Tabs.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"components/display/Badge.jsx":"7d910cd395d3","components/display/Card.jsx":"0f5db13530a5","components/display/SectionHeader.jsx":"a7ba34b672f4","components/display/Tabs.jsx":"d39d61624ad1","components/display/Tag.jsx":"d3ea8f63524a","components/feedback/Dialog.jsx":"57564e09055f","components/feedback/Toast.jsx":"67cda03b1c8a","components/feedback/Tooltip.jsx":"909aaa0ef22a","components/forms/Button.jsx":"509a125c2753","components/forms/Checkbox.jsx":"cff4a9569b94","components/forms/IconButton.jsx":"65a7510ef53d","components/forms/Input.jsx":"11d09f430d7e","components/forms/Radio.jsx":"e55ef4505a95","components/forms/Select.jsx":"5560a2b203e1","components/forms/Switch.jsx":"bbef19cf87ac","components/forms/style-util.js":"225624838ed6"},"inlinedExternals":[],"unexposedExports":[{"name":"ensureStyle","sourcePath":"components/forms/style-util.js"}]} */

(() => {

const __ds_ns = (window.OACDesignSystem_d73471 = window.OACDesignSystem_d73471 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/forms/style-util.js
try { (() => {
function ensureStyle(id, css) {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(id)) {
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }
}
Object.assign(__ds_scope, { ensureStyle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/style-util.js", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.oac-badge{display:inline-flex;align-items:center;gap:5px;font-family:var(--font-body);
  font-size:10px;font-weight:var(--weight-medium);letter-spacing:var(--tracking-caps);text-transform:uppercase;
  padding:3px 8px;border-radius:var(--radius-sm);border:1px solid transparent;line-height:1.4;}
.oac-badge--navy{background:var(--oac-navy);color:#fff;}
.oac-badge--blue{background:var(--oac-blue-light);color:var(--oac-navy);}
.oac-badge--red{background:var(--oac-red);color:#fff;}
.oac-badge--rose{background:var(--oac-rose);color:var(--oac-red);}
.oac-badge--cream{background:var(--oac-cream);color:var(--oac-ink);}
.oac-badge--outline{background:transparent;color:var(--text-body);border-color:var(--border-strong);}
`;
function Badge({
  tone = 'navy',
  children,
  className = '',
  ...rest
}) {
  __ds_scope.ensureStyle('oac-badge-style', css);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `oac-badge oac-badge--${tone} ${className}`
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.oac-card{background:var(--surface-card);border:1px solid var(--border-default);border-radius:var(--radius-md);
  box-shadow:var(--shadow-card);font-family:var(--font-body);color:var(--text-body);overflow:hidden;}
.oac-card__eyebrow{font-size:10px;font-weight:var(--weight-medium);letter-spacing:var(--tracking-wide);
  text-transform:uppercase;color:var(--text-muted);margin-bottom:8px;}
.oac-card__title{font-family:var(--font-display);font-size:20px;font-weight:var(--weight-semibold);
  color:var(--text-heading);margin:0 0 6px;line-height:var(--leading-heading);}
.oac-card__body{padding:var(--space-5);}
.oac-card__footer{padding:var(--space-3) var(--space-5);border-top:1px solid var(--border-default);
  display:flex;gap:8px;justify-content:flex-end;background:var(--surface-page);}
.oac-card--tint .oac-card__body{background:var(--surface-tint);}
.oac-card--rule{border-top:3px solid var(--accent-primary);}
`;
function Card({
  eyebrow,
  title,
  footer,
  tint = false,
  rule = false,
  children,
  className = '',
  style,
  ...rest
}) {
  __ds_scope.ensureStyle('oac-card-style', css);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `oac-card ${tint ? 'oac-card--tint' : ''} ${rule ? 'oac-card--rule' : ''} ${className}`,
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "oac-card__body"
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    className: "oac-card__eyebrow"
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    className: "oac-card__title"
  }, title), children), footer && /*#__PURE__*/React.createElement("div", {
    className: "oac-card__footer"
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/SectionHeader.jsx
try { (() => {
const css = `
.oac-secheader{font-family:var(--font-body);display:flex;flex-direction:column;gap:6px;}
.oac-secheader__eyebrow{font-size:11px;font-weight:var(--weight-medium);letter-spacing:var(--tracking-wide);
  text-transform:uppercase;color:var(--text-muted);}
.oac-secheader__row{display:flex;align-items:baseline;gap:14px;border-bottom:1.5px solid var(--border-strong);padding-bottom:8px;}
.oac-secheader__title{font-family:var(--font-display);font-size:24px;font-weight:var(--weight-semibold);
  color:var(--text-heading);margin:0;line-height:var(--leading-heading);}
.oac-secheader__pair{margin-left:auto;font-size:11px;font-weight:var(--weight-medium);
  letter-spacing:var(--tracking-wide);text-transform:uppercase;color:var(--accent-danger);white-space:nowrap;}
`;
function SectionHeader({
  eyebrow,
  title,
  pair,
  className = '',
  style
}) {
  __ds_scope.ensureStyle('oac-secheader-style', css);
  return /*#__PURE__*/React.createElement("div", {
    className: `oac-secheader ${className}`,
    style: style
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    className: "oac-secheader__eyebrow"
  }, eyebrow), /*#__PURE__*/React.createElement("div", {
    className: "oac-secheader__row"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "oac-secheader__title"
  }, title), pair && /*#__PURE__*/React.createElement("span", {
    className: "oac-secheader__pair"
  }, pair)));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/display/Tabs.jsx
try { (() => {
const {
  useState
} = React;
const css = `
.oac-tabs{font-family:var(--font-body);}
.oac-tabs__list{display:flex;gap:2px;border-bottom:1.5px solid var(--border-strong);}
.oac-tab{all:unset;cursor:pointer;font-size:13px;font-weight:var(--weight-medium);letter-spacing:var(--tracking-caps);
  text-transform:uppercase;color:var(--text-muted);padding:8px 14px;margin-bottom:-1.5px;
  border-bottom:3px solid transparent;transition:color var(--duration-fast) var(--ease-standard);}
.oac-tab:hover{color:var(--text-body);}
.oac-tab[aria-selected="true"]{color:var(--accent-primary);border-bottom-color:var(--accent-primary);}
.oac-tabs__panel{padding:var(--space-4) 0;font-size:14px;color:var(--text-body);}
`;
function Tabs({
  tabs = [],
  defaultIndex = 0,
  onChange,
  className = '',
  style
}) {
  __ds_scope.ensureStyle('oac-tabs-style', css);
  const [active, setActive] = useState(defaultIndex);
  const current = tabs[active];
  return /*#__PURE__*/React.createElement("div", {
    className: `oac-tabs ${className}`,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "oac-tabs__list",
    role: "tablist"
  }, tabs.map((t, i) => /*#__PURE__*/React.createElement("button", {
    key: t.label,
    className: "oac-tab",
    role: "tab",
    "aria-selected": i === active,
    onClick: () => {
      setActive(i);
      if (onChange) onChange(i);
    }
  }, t.label))), current && current.content && /*#__PURE__*/React.createElement("div", {
    className: "oac-tabs__panel",
    role: "tabpanel"
  }, current.content));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.oac-tag{display:inline-flex;align-items:center;gap:6px;font-family:var(--font-body);font-size:12px;
  color:var(--text-body);background:var(--surface-page);border:1px solid var(--border-default);
  border-radius:var(--radius-sm);padding:3px 9px;line-height:1.5;}
.oac-tag__x{all:unset;cursor:pointer;font-size:12px;line-height:1;color:var(--text-muted);padding:0 1px;}
.oac-tag__x:hover{color:var(--accent-danger);}
`;
function Tag({
  onRemove,
  children,
  className = '',
  ...rest
}) {
  __ds_scope.ensureStyle('oac-tag-style', css);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `oac-tag ${className}`
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    className: "oac-tag__x",
    "aria-label": "Remove",
    onClick: onRemove
  }, "\u2715"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
const css = `
.oac-dialog-backdrop{position:fixed;inset:0;background:rgba(67,67,67,.55);display:flex;
  align-items:center;justify-content:center;padding:24px;z-index:100;}
.oac-dialog{background:var(--surface-card);border-radius:var(--radius-lg);box-shadow:var(--shadow-overlay);
  border:1px solid var(--border-default);max-width:440px;width:100%;font-family:var(--font-body);color:var(--text-body);}
.oac-dialog__head{padding:var(--space-5) var(--space-5) 0;display:flex;align-items:flex-start;gap:12px;}
.oac-dialog__title{font-family:var(--font-display);font-size:20px;font-weight:var(--weight-semibold);
  color:var(--text-heading);margin:0;flex:1;}
.oac-dialog__x{all:unset;cursor:pointer;color:var(--text-muted);font-size:15px;line-height:1;padding:2px 4px;}
.oac-dialog__x:hover{color:var(--accent-danger);}
.oac-dialog__body{padding:var(--space-3) var(--space-5) var(--space-5);font-size:14px;line-height:var(--leading-body);}
.oac-dialog__footer{padding:var(--space-3) var(--space-5);border-top:1px solid var(--border-default);
  display:flex;gap:8px;justify-content:flex-end;background:var(--surface-page);
  border-radius:0 0 var(--radius-lg) var(--radius-lg);}
`;
function Dialog({
  open,
  title,
  onClose,
  footer,
  children,
  className = ''
}) {
  __ds_scope.ensureStyle('oac-dialog-style', css);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "oac-dialog-backdrop",
    onClick: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: `oac-dialog ${className}`,
    role: "dialog",
    "aria-modal": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "oac-dialog__head"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "oac-dialog__title"
  }, title), onClose && /*#__PURE__*/React.createElement("button", {
    className: "oac-dialog__x",
    "aria-label": "Close",
    onClick: onClose
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "oac-dialog__body"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "oac-dialog__footer"
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const css = `
.oac-toast{display:inline-flex;align-items:center;gap:12px;background:var(--oac-ink);color:var(--oac-gray-light);
  font-family:var(--font-body);font-size:13px;line-height:1.4;padding:10px 14px;
  border-radius:var(--radius-md);box-shadow:var(--shadow-raised);border-left:3px solid var(--oac-blue-light);}
.oac-toast--success{border-left-color:var(--oac-blue-light);}
.oac-toast--error{border-left-color:var(--oac-rose);}
.oac-toast__x{all:unset;cursor:pointer;color:var(--oac-gray-light);opacity:.7;font-size:12px;line-height:1;}
.oac-toast__x:hover{opacity:1;}
.oac-toast__action{all:unset;cursor:pointer;color:var(--oac-blue-light);font-weight:var(--weight-medium);font-size:13px;}
.oac-toast__action:hover{color:#fff;}
`;
function Toast({
  tone = 'success',
  action,
  onAction,
  onDismiss,
  children,
  className = '',
  style
}) {
  __ds_scope.ensureStyle('oac-toast-style', css);
  return /*#__PURE__*/React.createElement("div", {
    className: `oac-toast oac-toast--${tone} ${className}`,
    role: "status",
    style: style
  }, /*#__PURE__*/React.createElement("span", null, children), action && /*#__PURE__*/React.createElement("button", {
    className: "oac-toast__action",
    onClick: onAction
  }, action), onDismiss && /*#__PURE__*/React.createElement("button", {
    className: "oac-toast__x",
    "aria-label": "Dismiss",
    onClick: onDismiss
  }, "\u2715"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
const css = `
.oac-tooltip-wrap{position:relative;display:inline-flex;}
.oac-tooltip{position:absolute;bottom:calc(100% + 7px);left:50%;transform:translateX(-50%);
  background:var(--oac-ink);color:var(--oac-gray-light);font-family:var(--font-body);font-size:12px;
  line-height:1.4;padding:5px 9px;border-radius:var(--radius-sm);white-space:nowrap;pointer-events:none;
  opacity:0;transition:opacity var(--duration-fast) var(--ease-standard);z-index:50;}
.oac-tooltip::after{content:"";position:absolute;top:100%;left:50%;transform:translateX(-50%);
  border:4px solid transparent;border-top-color:var(--oac-ink);}
.oac-tooltip-wrap:hover .oac-tooltip,.oac-tooltip-wrap:focus-within .oac-tooltip{opacity:1;}
`;
function Tooltip({
  text,
  children,
  className = '',
  style
}) {
  __ds_scope.ensureStyle('oac-tooltip-style', css);
  return /*#__PURE__*/React.createElement("span", {
    className: `oac-tooltip-wrap ${className}`,
    style: style
  }, children, /*#__PURE__*/React.createElement("span", {
    className: "oac-tooltip",
    role: "tooltip"
  }, text));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.oac-btn{font-family:var(--font-body);font-weight:var(--weight-medium);letter-spacing:.02em;
  border-radius:var(--radius-md);border:1.5px solid transparent;cursor:pointer;
  display:inline-flex;align-items:center;justify-content:center;gap:8px;
  transition:background var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard);}
.oac-btn:disabled{opacity:.45;cursor:not-allowed;}
.oac-btn--sm{font-size:13px;padding:5px 12px;}
.oac-btn--md{font-size:14px;padding:8px 18px;}
.oac-btn--lg{font-size:16px;padding:11px 24px;}
.oac-btn--primary{background:var(--accent-primary);color:var(--text-on-accent);}
.oac-btn--primary:hover:not(:disabled){background:#0a4a85;}
.oac-btn--primary:active:not(:disabled){background:#052848;}
[data-theme="dark"] .oac-btn--primary{color:var(--oac-navy);}
.oac-btn--secondary{background:transparent;color:var(--text-body);border-color:var(--border-strong);}
.oac-btn--secondary:hover:not(:disabled){background:var(--surface-accent);border-color:var(--accent-primary);color:var(--accent-primary);}
.oac-btn--danger{background:var(--accent-danger);color:#fff;}
.oac-btn--danger:hover:not(:disabled){background:#7a0000;}
.oac-btn--ghost{background:transparent;color:var(--accent-primary);}
.oac-btn--ghost:hover:not(:disabled){background:var(--surface-accent);}
`;
function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  children,
  className = '',
  style,
  ...rest
}) {
  __ds_scope.ensureStyle('oac-button-style', css);
  return /*#__PURE__*/React.createElement("button", _extends({
    className: `oac-btn oac-btn--${variant} oac-btn--${size} ${className}`,
    disabled: disabled,
    style: {
      ...(fullWidth ? {
        width: '100%'
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.oac-check{display:inline-flex;align-items:center;gap:10px;cursor:pointer;font-family:var(--font-body);font-size:14px;color:var(--text-body);}
.oac-check input{position:absolute;opacity:0;width:0;height:0;}
.oac-check__box{width:16px;height:16px;flex:none;border:1.5px solid var(--border-strong);border-radius:var(--radius-sm);
  background:var(--surface-card);display:inline-flex;align-items:center;justify-content:center;
  transition:background var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard);}
.oac-check__box::after{content:"";width:8px;height:4px;border-left:2px solid #fff;border-bottom:2px solid #fff;
  transform:rotate(-45deg) translate(1px,-1px);opacity:0;}
.oac-check input:checked + .oac-check__box{background:var(--oac-navy);border-color:var(--oac-navy);}
.oac-check input:checked + .oac-check__box::after{opacity:1;}
.oac-check input:focus-visible + .oac-check__box{box-shadow:0 0 0 2px var(--accent-primary-soft);}
.oac-check--disabled{opacity:.5;cursor:not-allowed;}
`;
function Checkbox({
  label,
  disabled = false,
  className = '',
  style,
  ...rest
}) {
  __ds_scope.ensureStyle('oac-checkbox-style', css);
  return /*#__PURE__*/React.createElement("label", {
    className: `oac-check ${disabled ? 'oac-check--disabled' : ''} ${className}`,
    style: style
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "oac-check__box"
  }), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.oac-iconbtn{font-family:var(--font-body);border-radius:var(--radius-md);cursor:pointer;
  display:inline-flex;align-items:center;justify-content:center;
  background:transparent;color:var(--text-body);border:1.5px solid transparent;
  transition:background var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard);}
.oac-iconbtn:hover:not(:disabled){background:var(--surface-accent);color:var(--accent-primary);}
.oac-iconbtn:active:not(:disabled){background:var(--oac-blue-light);}
.oac-iconbtn:disabled{opacity:.45;cursor:not-allowed;}
.oac-iconbtn--outline{border-color:var(--border-strong);}
.oac-iconbtn--sm{width:28px;height:28px;}
.oac-iconbtn--md{width:36px;height:36px;}
.oac-iconbtn--lg{width:44px;height:44px;}
`;
function IconButton({
  size = 'md',
  outline = false,
  label,
  children,
  className = '',
  ...rest
}) {
  __ds_scope.ensureStyle('oac-iconbutton-style', css);
  return /*#__PURE__*/React.createElement("button", _extends({
    className: `oac-iconbtn oac-iconbtn--${size} ${outline ? 'oac-iconbtn--outline' : ''} ${className}`,
    "aria-label": label,
    title: label
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.oac-field{display:flex;flex-direction:column;gap:6px;font-family:var(--font-body);}
.oac-field__label{font-size:11px;font-weight:var(--weight-medium);letter-spacing:var(--tracking-caps);text-transform:uppercase;color:var(--text-body);}
.oac-field__hint{font-size:12px;color:var(--text-muted);}
.oac-field__hint--error{color:var(--accent-danger);}
.oac-input{font-family:var(--font-body);font-size:14px;color:var(--text-body);
  background:var(--surface-card);border:1px solid var(--border-default);border-radius:var(--radius-md);
  padding:8px 12px;outline:none;transition:border-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard);}
.oac-input::placeholder{color:var(--text-muted);}
.oac-input:hover:not(:disabled){border-color:var(--border-strong);}
.oac-input:focus{border-color:var(--accent-primary);box-shadow:0 0 0 2px var(--accent-primary-soft);}
.oac-input:disabled{opacity:.5;cursor:not-allowed;}
.oac-input--error{border-color:var(--accent-danger);}
.oac-input--error:focus{box-shadow:0 0 0 2px var(--accent-danger-soft);}
`;
function Input({
  label,
  hint,
  error,
  className = '',
  style,
  ...rest
}) {
  __ds_scope.ensureStyle('oac-input-style', css);
  const input = /*#__PURE__*/React.createElement("input", _extends({
    className: `oac-input ${error ? 'oac-input--error' : ''} ${className}`,
    style: style
  }, rest));
  if (!label && !hint && !error) return input;
  return /*#__PURE__*/React.createElement("label", {
    className: "oac-field"
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "oac-field__label"
  }, label), input, (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: `oac-field__hint ${error ? 'oac-field__hint--error' : ''}`
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.oac-radio{display:inline-flex;align-items:center;gap:10px;cursor:pointer;font-family:var(--font-body);font-size:14px;color:var(--text-body);}
.oac-radio input{position:absolute;opacity:0;width:0;height:0;}
.oac-radio__dot{width:16px;height:16px;flex:none;border:1.5px solid var(--border-strong);border-radius:50%;
  background:var(--surface-card);display:inline-flex;align-items:center;justify-content:center;
  transition:border-color var(--duration-fast) var(--ease-standard);}
.oac-radio__dot::after{content:"";width:8px;height:8px;border-radius:50%;background:var(--oac-navy);transform:scale(0);
  transition:transform var(--duration-fast) var(--ease-standard);}
.oac-radio input:checked + .oac-radio__dot{border-color:var(--oac-navy);}
.oac-radio input:checked + .oac-radio__dot::after{transform:scale(1);}
.oac-radio input:focus-visible + .oac-radio__dot{box-shadow:0 0 0 2px var(--accent-primary-soft);}
.oac-radio--disabled{opacity:.5;cursor:not-allowed;}
`;
function Radio({
  label,
  disabled = false,
  className = '',
  style,
  ...rest
}) {
  __ds_scope.ensureStyle('oac-radio-style', css);
  return /*#__PURE__*/React.createElement("label", {
    className: `oac-radio ${disabled ? 'oac-radio--disabled' : ''} ${className}`,
    style: style
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "oac-radio__dot"
  }), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.oac-select-wrap{position:relative;display:inline-flex;width:100%;}
.oac-select{appearance:none;width:100%;font-family:var(--font-body);font-size:14px;color:var(--text-body);
  background:var(--surface-card);border:1px solid var(--border-default);border-radius:var(--radius-md);
  padding:8px 34px 8px 12px;outline:none;cursor:pointer;
  transition:border-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard);}
.oac-select:hover:not(:disabled){border-color:var(--border-strong);}
.oac-select:focus{border-color:var(--accent-primary);box-shadow:0 0 0 2px var(--accent-primary-soft);}
.oac-select:disabled{opacity:.5;cursor:not-allowed;}
.oac-select-wrap::after{content:"";position:absolute;right:13px;top:50%;width:7px;height:7px;
  border-right:1.5px solid var(--text-body);border-bottom:1.5px solid var(--text-body);
  transform:translateY(-70%) rotate(45deg);pointer-events:none;}
`;
function Select({
  label,
  options = [],
  className = '',
  style,
  children,
  ...rest
}) {
  __ds_scope.ensureStyle('oac-select-style', css);
  const select = /*#__PURE__*/React.createElement("span", {
    className: "oac-select-wrap",
    style: style
  }, /*#__PURE__*/React.createElement("select", _extends({
    className: `oac-select ${className}`
  }, rest), options.length > 0 ? options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label)) : children));
  if (!label) return select;
  return /*#__PURE__*/React.createElement("label", {
    className: "oac-field",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "oac-field__label",
    style: {
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase'
    }
  }, label), select);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.oac-switch{display:inline-flex;align-items:center;gap:10px;cursor:pointer;font-family:var(--font-body);font-size:14px;color:var(--text-body);}
.oac-switch input{position:absolute;opacity:0;width:0;height:0;}
.oac-switch__track{width:34px;height:18px;flex:none;border-radius:var(--radius-pill);
  background:var(--border-default);border:1.5px solid transparent;position:relative;
  transition:background var(--duration-base) var(--ease-standard);}
.oac-switch__track::after{content:"";position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
  background:#fff;box-shadow:var(--shadow-card);transition:transform var(--duration-base) var(--ease-standard);}
.oac-switch input:checked + .oac-switch__track{background:var(--oac-navy);}
.oac-switch input:checked + .oac-switch__track::after{transform:translateX(16px);}
.oac-switch input:focus-visible + .oac-switch__track{box-shadow:0 0 0 2px var(--accent-primary-soft);}
.oac-switch--disabled{opacity:.5;cursor:not-allowed;}
`;
function Switch({
  label,
  disabled = false,
  className = '',
  style,
  ...rest
}) {
  __ds_scope.ensureStyle('oac-switch-style', css);
  return /*#__PURE__*/React.createElement("label", {
    className: `oac-switch ${disabled ? 'oac-switch--disabled' : ''} ${className}`,
    style: style
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "oac-switch__track"
  }), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

})();
