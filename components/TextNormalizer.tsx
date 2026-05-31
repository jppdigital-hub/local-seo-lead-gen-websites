"use client";

import { useEffect } from "react";

function normalizeDashSpacing(value: string) {
  return value
    .replace(/\s+[—–]\s+/g, " - ")
    .replace(/([^\s])[—–]([^\s])/g, "$1 - $2")
    .replace(/([^\s])[—–]\s+/g, "$1 - ")
    .replace(/\s+[—–]([^\s])/g, " - $1");
}

function normalizeTextNode(node: Text) {
  const nextValue = normalizeDashSpacing(node.nodeValue ?? "");
  if (nextValue !== node.nodeValue) {
    node.nodeValue = nextValue;
  }
}

export default function TextNormalizer() {
  useEffect(() => {
    const ignoredTags = new Set(["SCRIPT", "STYLE", "TEXTAREA", "INPUT", "NOSCRIPT"]);

    function walk(root: Node) {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
          const parent = node.parentElement;
          if (!parent || ignoredTags.has(parent.tagName)) {
            return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_ACCEPT;
        },
      });

      let current = walker.nextNode();
      while (current) {
        normalizeTextNode(current as Text);
        current = walker.nextNode();
      }
    }

    walk(document.body);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            normalizeTextNode(node as Text);
          } else if (node.nodeType === Node.ELEMENT_NODE) {
            walk(node);
          }
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return null;
}
