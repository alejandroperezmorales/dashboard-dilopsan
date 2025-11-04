
import { ChartLine } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ProgressWithColors } from "@/components/ui/progress-with-colors";

// CAC/LTV General Stats
const cacLtvStats = {
  overallCac: 1200,              // Average CAC across all clients
  overallLtv: 3800,              // Average LTV across all clients
  ratio: 3.17,                  // LTV/CAC ratio
  positiveClients: 68,           // Percentage of clients with LTV >= 3x CAC
  inProcessClients: 22,          // Percentage of clients with LTV between 1x and 3x CAC
  negativeClients: 10,           // Percentage of clients with LTV < CAC
  acquisitionSources: {
    facebook: 42,                // Percentage of clients from Facebook
    instagram: 28,               // Percentage of clients from Instagram
    google: 15,                  // Percentage of clients from Google
    tradicional: 15,             // Combined percentage of traditional clients (including referrals)
  }
};

const CacLtvStats = () => {
  return (
    <div className="mb-4 sm:mb-6">
      <Card className="overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-white pb-2">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <ChartLine className="h-5 w-5 text-sales-primary" />
            Análisis de CAC/LTV
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Key Metrics */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="space-y-1">
                  <span className="text-sm text-muted-foreground">CAC Promedio</span>
                  <div className="font-semibold text-xl">${cacLtvStats.overallCac.toLocaleString()}</div>
                </div>
                <div className="space-y-1 text-right">
                  <span className="text-sm text-muted-foreground">LTV Promedio</span>
                  <div className="font-semibold text-xl">${cacLtvStats.overallLtv.toLocaleString()}</div>
                </div>
              </div>
              
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Ratio LTV/CAC</span>
                  <span className={`font-semibold ${cacLtvStats.ratio >= 3 ? 'text-sales-success' : cacLtvStats.ratio >= 1 ? 'text-amber-500' : 'text-sales-danger'}`}>
                    {cacLtvStats.ratio.toFixed(1)}x
                  </span>
                </div>
                <Progress 
                  value={Math.min((cacLtvStats.ratio / 3) * 100, 100)} 
                  className="h-2"
                />
                <p className="text-xs text-muted-foreground">Meta: 3.0x o superior</p>
              </div>

              <div className="grid grid-cols-3 gap-2 py-1">
                <div className="bg-green-50 border border-green-100 rounded-md p-2 text-center">
                  <div className="font-semibold text-sales-success">{cacLtvStats.positiveClients}%</div>
                  <div className="text-xs text-green-700">Positivos</div>
                </div>
                <div className="bg-amber-50 border border-amber-100 rounded-md p-2 text-center">
                  <div className="font-semibold text-amber-500">{cacLtvStats.inProcessClients}%</div>
                  <div className="text-xs text-amber-700">En proceso</div>
                </div>
                <div className="bg-red-50 border border-red-100 rounded-md p-2 text-center">
                  <div className="font-semibold text-sales-danger">{cacLtvStats.negativeClients}%</div>
                  <div className="text-xs text-red-700">Negativos</div>
                </div>
              </div>
            </div>
            
            {/* Acquisition Sources */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium mb-2">Fuentes de Adquisición</h4>
              
              <div className="space-y-2">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>Facebook</span>
                    <span>{cacLtvStats.acquisitionSources.facebook}%</span>
                  </div>
                  <ProgressWithColors value={cacLtvStats.acquisitionSources.facebook} className="h-1.5 bg-blue-100" indicatorClassName="bg-blue-600" />
                </div>
                
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>Instagram</span>
                    <span>{cacLtvStats.acquisitionSources.instagram}%</span>
                  </div>
                  <ProgressWithColors value={cacLtvStats.acquisitionSources.instagram} className="h-1.5 bg-pink-100" indicatorClassName="bg-pink-600" />
                </div>
                
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>Google</span>
                    <span>{cacLtvStats.acquisitionSources.google}%</span>
                  </div>
                  <ProgressWithColors value={cacLtvStats.acquisitionSources.google} className="h-1.5 bg-yellow-100" indicatorClassName="bg-yellow-600" />
                </div>
                
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>Tradicional</span>
                    <span>{cacLtvStats.acquisitionSources.tradicional}%</span>
                  </div>
                  <ProgressWithColors value={cacLtvStats.acquisitionSources.tradicional} className="h-1.5 bg-gray-100" indicatorClassName="bg-gray-600" />
                </div>
              </div>

              <div className="text-xs text-muted-foreground pt-1">
                Los datos representan el porcentaje de clientes por cada fuente.
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CacLtvStats;
