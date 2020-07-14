import { addGlobalEventProcessor, SDK_VERSION } from '@sentry/browser';

if (addGlobalEventProcessor) {
  addGlobalEventProcessor(event => {
    event.sdk = {
      ...event.sdk,
      name: 'sentry.javascript.angular',
      packages: [
        ...((event.sdk && event.sdk.packages) || []),
        {
          name: 'npm:@sentry/angular',
          version: SDK_VERSION,
        },
      ],
      version: SDK_VERSION,
    };

    return event;
  });
}

export * from '@sentry/browser';
export { createErrorHandler, ErrorHandlerOptions } from './errorhandler';
export {
  getActiveTransaction,
  routingInstrumentation,
  TraceClassDecorator,
  TraceMethodDecorator,
  TraceDirective,
  TraceService,
} from './tracing';
