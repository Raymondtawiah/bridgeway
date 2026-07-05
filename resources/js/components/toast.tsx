import React, { createContext, useContext, useState, useCallback, useRef, useEffect } from "react";
import { CheckCircle2, XCircle, AlertTriangle, X } from "lucide-react";
import Loader from "@/components/loader";

const ToastContext = createContext(null);

const VARIANTS = {
  success: { color: "#10b981", bg: "#ecfdf5", icon: CheckCircle2 },
  error: { color: "#f43f5e", bg: "#fff1f2", icon: XCircle },
  warning: { color: "#f59e0b", bg: "#fffbeb", icon: AlertTriangle },
};

let idCounter = 0;

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const remove = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const push = useCallback((message, options = {}) => {
    const id = ++idCounter;
    const toast = {
      id,
      message,
      title: options.title,
      type: options.type || "success",
      duration: options.duration ?? 5000,
    };
    setToasts((prev) => [toast, ...prev]);
    return id;
  }, []);

  const toast = {
    show: push,
    success: (message, options) => push(message, { ...options, type: "success" }),
    error: (message, options) => push(message, { ...options, type: "error" }),
    warning: (message, options) => push(message, { ...options, type: "warning" }),
  };

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <ToastViewport toasts={toasts} onDismiss={remove} />
      <Styles />
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within a ToastProvider");
  return ctx;
}

function ToastViewport({ toasts, onDismiss }) {
  return (
    <div className="toast-viewport" aria-live="polite" aria-atomic="false">
      {toasts.map((t) => (
        <ToastItem key={t.id} toast={t} onDismiss={() => onDismiss(t.id)} />
      ))}
    </div>
  );
}

function ToastItem({ toast, onDismiss }) {
  const { type, title, message, duration } = toast;
  const variant = VARIANTS[type] || VARIANTS.success;
  const Icon = variant.icon;

  const [leaving, setLeaving] = useState(false);
  const [paused, setPaused] = useState(false);
  const [phase, setPhase] = useState('loading');
  const timerRef = useRef(null);

  const close = useCallback(() => {
    setLeaving(true);
    window.setTimeout(onDismiss, 220);
  }, [onDismiss]);

  useEffect(() => {
    if (phase !== 'loading') return;
    const t = window.setTimeout(() => setPhase('toast'), 1500);
    return () => window.clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase !== 'toast' || duration === Infinity || duration <= 0) return;

    timerRef.current = window.setTimeout(close, duration);

    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [phase, duration, close]);

  if (phase === 'loading') {
    return (
      <div className="toast-overlay">
        <div className="toast-backdrop" />
        <div className="toast-fullscreen-loader">
          <Loader />
          <div
            className="toast-loading-bar"
            style={{ backgroundColor: variant.color }}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`toast-item toast-${type}${leaving ? ' is-leaving' : ''}`}
      style={{ '--toast-color': variant.color, '--toast-bg': variant.bg }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="status"
    >
      <div className="toast-icon">
        <Icon size={19} strokeWidth={2} />
      </div>
      <div className="toast-body">
        {title && <div className="toast-title">{title}</div>}
        <div className="toast-message">{message}</div>
      </div>
      <button className="toast-close" onClick={close} aria-label="Dismiss notification">
        <X size={15} strokeWidth={2.4} />
      </button>

      {duration !== Infinity && duration > 0 && (
        <div className="toast-track">
          <div
            className="toast-bar"
            style={{
              backgroundColor: variant.color,
              animation: `toast-shrink ${duration}ms linear forwards`,
              animationPlayState: paused ? 'paused' : 'running',
            }}
          />
        </div>
      )}
    </div>
  );
}

function Styles() {
  return (
    <style>{`
      .toast-viewport{
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: min(360px, calc(100vw - 32px));
        pointer-events: none;
      }

      .toast-item{
        position: relative;
        pointer-events: auto;
        display: flex;
        align-items: flex-start;
        gap: 12px;
        background: #ffffff;
        border: 1px solid rgba(15,23,42,0.08);
        border-radius: 12px;
        box-shadow: 0 8px 24px rgba(15,23,42,0.12), 0 2px 6px rgba(15,23,42,0.06);
        padding: 14px 40px 16px 14px;
        overflow: hidden;
        animation: toast-in 0.32s cubic-bezier(.22,.68,0,1.1) both;
      }
      .toast-item.is-leaving{
        animation: toast-out 0.2s ease-in both;
      }

      @keyframes toast-in{
        from{ opacity: 0; transform: translateX(110%); }
        to{ opacity: 1; transform: translateX(0); }
      }
      @keyframes toast-out{
        from{ opacity: 1; transform: translateX(0); }
        to{ opacity: 0; transform: translateX(60px); }
      }
      @keyframes toast-shrink{
        from{ transform: scaleX(1); }
        to{ transform: scaleX(0); }
      }
      @media (prefers-reduced-motion: reduce){
        .toast-item, .toast-item.is-leaving{ animation: none; }
      }

      .toast-overlay{
        position: fixed;
        inset: 0;
        z-index: 9998;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .toast-backdrop{
        position: absolute;
        inset: 0;
        background: #ffffff;
      }
      .toast-fullscreen-loader{
        position: relative;
        z-index: 1;
      }

      .toast-icon{
        flex-shrink: 0;
        width: 32px;
        height: 32px;
        border-radius: 999px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--toast-bg);
        color: var(--toast-color);
        margin-top: 1px;
      }

      .toast-body{ flex: 1; min-width: 0; }
      .toast-title{
        font-family: -apple-system, "Inter", system-ui, sans-serif;
        font-size: 13.5px;
        font-weight: 700;
        color: #0f172a;
        margin-bottom: 2px;
      }
      .toast-message{
        font-family: -apple-system, "Inter", system-ui, sans-serif;
        font-size: 13px;
        line-height: 1.5;
        color: #475569;
      }

      .toast-close{
        position: absolute;
        top: 10px;
        right: 10px;
        border: none;
        background: transparent;
        color: #94a3b8;
        width: 22px;
        height: 22px;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background 0.15s, color 0.15s;
      }
      .toast-close:hover{ background: #f1f5f9; color: #334155; }

      .toast-track{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 5px;
        background: #e2e8f0;
        border-radius: 0 0 12px 12px;
        overflow: hidden;
      }
      .toast-bar{
        height: 100%;
        width: 100%;
        transform-origin: left center;
        transform: scaleX(1);
      }

      .toast-loading-bar{
        position: absolute;
        bottom: 40px;
        left: 50%;
        transform: translateX(-50%);
        width: min(280px, calc(100vw - 64px));
        height: 4px;
        border-radius: 999px;
        background: #e2e8f0;
        overflow: hidden;
      }
      .toast-loading-bar::after{
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        background: inherit;
        border-radius: inherit;
        transform-origin: left center;
        animation: toast-loading-shrink 1.4s ease-in-out infinite;
      }
      @keyframes toast-loading-shrink{
        0%{ transform: scaleX(1); opacity: 1; }
        50%{ transform: scaleX(0.3); opacity: 0.6; }
        100%{ transform: scaleX(1); opacity: 1; }
      }
      @media (prefers-reduced-motion: reduce){
        .toast-loading-bar::after{ animation: none; }
      }
    `}</style>
  );
}
