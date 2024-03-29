import { WebTracerProvider } from '@opentelemetry/sdk-trace-web';
import { registerInstrumentations } from '@opentelemetry/instrumentation';
import { FetchInstrumentation } from '@opentelemetry/instrumentation-fetch';
import { ZoneContextManager } from '@opentelemetry/context-zone';
const { Resource } = require('@opentelemetry/resources');
const { SemanticResourceAttributes } = require('@opentelemetry/semantic-conventions');
const { OTLPTraceExporter }  = require('@opentelemetry/exporter-trace-otlp-http');

const collectorExporter = new OTLPTraceExporter({

    headers: {}
    
    });

const provider = new WebTracerProvider({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: 'counter-app',
  }),
});

provider.register({
  contextManager: new ZoneContextManager()  // Zone is required to keep async calls in the same trace
});

const fetchInstrumentation = new FetchInstrumentation({});

fetchInstrumentation.setTracerProvider(provider);

// Registering instrumentations
registerInstrumentations({
  instrumentations: [
    fetchInstrumentation,
  ],
});

export default function TraceProvider({ children }) {
  return (
    <>
      {children}
    </>
  );
}