"use client";

import React, { Component } from "react";
import { Icon } from '@/components/ui'; 

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(_) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="c-container flex h-full w-full flex-col items-center justify-center">
          <h1 className="title text-warning">
            {this.props.errorMessage ?? "Oops, there is an error!"}
          </h1>
          <Icon icon="carbon:error" className="text-6xl text-warning" />
          <button
            type="button"
            onClick={() => this.setState({ hasError: false })}
            className="c-button-primary"
            aria-label="Reload page">
            Try again?
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}