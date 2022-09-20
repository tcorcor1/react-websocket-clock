import * as appInsights from 'applicationinsights';
import dotenv from 'dotenv';

export class Config {
  public static setup() {
    dotenv.config();

    appInsights
      .setup(process.env.AZURE_APPLICATION_INSIGHTS_CONN)
      .setAutoCollectConsole(true)
      .setAutoCollectRequests(true)
      .setAutoCollectPerformance(true, true)
      .setAutoCollectExceptions(true)
      .setAutoCollectDependencies(true)
      .setDistributedTracingMode(appInsights.DistributedTracingModes.AI_AND_W3C)
      .start();
  }
}
