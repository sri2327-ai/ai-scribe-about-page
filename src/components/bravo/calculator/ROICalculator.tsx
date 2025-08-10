
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { DollarSign, Clock, Calendar, TrendingUp } from 'lucide-react';

interface ROICalculatorProps {
  onCalculate?: (data: { monthly: number; yearly: number; multiplier: number }) => void;
}

export const ROICalculator: React.FC<ROICalculatorProps> = ({ onCalculate }) => {
  const [providers, setProviders] = useState(5);
  const [appointmentsPerWeek, setAppointmentsPerWeek] = useState(75);
  const [noShowRate, setNoShowRate] = useState(15);
  const [appointmentRevenue, setAppointmentRevenue] = useState(150);
  
  const calculateRoi = () => {
    const weeklyAppointments = providers * appointmentsPerWeek;
    const yearlyAppointments = weeklyAppointments * 50; // 50 working weeks
    
    const currentNoShows = Math.round(yearlyAppointments * (noShowRate / 100));
    const newNoShowRate = Math.max(noShowRate * 0.3, 2); // 70% reduction, minimum 2%
    const newNoShows = Math.round(yearlyAppointments * (newNoShowRate / 100));
    
    const recoveredAppointments = currentNoShows - newNoShows;
    const yearlySavings = recoveredAppointments * appointmentRevenue;
    const hoursPerWeek = recoveredAppointments * 0.5 / 50; // 30min per appointment, distributed weekly
    const hoursPerProviderPerWeek = hoursPerWeek / providers;
    
    return {
      yearlySavings,
      recoveredAppointments,
      hoursPerProviderPerWeek,
      totalHours: recoveredAppointments * 0.5 // 30 minutes per appointment
    };
  };

  const roi = calculateRoi();

  useEffect(() => {
    if (onCalculate) {
      onCalculate({
        monthly: roi.yearlySavings / 12,
        yearly: roi.yearlySavings,
        multiplier: roi.yearlySavings > 0 ? roi.yearlySavings / 100000 : 0
      });
    }
  }, [roi.yearlySavings, onCalculate]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
      {/* Input Section */}
      <div className="w-full">
        <Card className="p-4 lg:p-6 shadow-md">
          <div className="mb-6 lg:mb-8">
            <h3 className="text-xl lg:text-2xl font-bold mb-2">Adjust for your practice</h3>
            <p className="text-sm lg:text-base text-muted-foreground">Organizations using S10.AI reduce no-shows by up to 70%</p>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-medium">Providers on your team</span>
                <span className="font-bold text-lg">{providers}</span>
              </div>
              <Slider 
                value={[providers]} 
                onValueChange={values => setProviders(values[0])}
                min={1}
                max={50}
                step={1}
                className="w-full"
              />
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-medium">Average appointments/week per provider</span>
                <span className="font-bold text-lg">{appointmentsPerWeek}</span>
              </div>
              <Slider 
                value={[appointmentsPerWeek]} 
                onValueChange={values => setAppointmentsPerWeek(values[0])}
                min={20}
                max={150}
                step={5}
                className="w-full"
              />
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-medium">Current no-show rate (%)</span>
                <span className="font-bold text-lg">{noShowRate}%</span>
              </div>
              <Slider 
                value={[noShowRate]} 
                onValueChange={values => setNoShowRate(values[0])}
                min={5}
                max={30}
                step={1}
                className="w-full"
              />
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-medium">Average appointment revenue ($)</span>
                <span className="font-bold text-lg">${appointmentRevenue}</span>
              </div>
              <Slider 
                value={[appointmentRevenue]} 
                onValueChange={values => setAppointmentRevenue(values[0])}
                min={50}
                max={500}
                step={10}
                className="w-full"
              />
            </div>
          </div>
        </Card>
      </div>

      {/* Results Section */}
      <div className="w-full">
        <Card className="p-4 lg:p-6 bg-gradient-to-br from-primary/5 to-secondary/5 shadow-md lg:sticky lg:top-4">
          <h4 className="text-lg lg:text-xl font-bold mb-4 lg:mb-6 text-center">Your Savings</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 lg:gap-4">
            <div className="flex items-center gap-3 lg:gap-4 p-3 lg:p-4 bg-card rounded-lg shadow-sm border">
              <div className="p-2 rounded-full bg-primary/10 flex-shrink-0">
                <DollarSign className="h-5 w-5 lg:h-6 lg:w-6 text-primary" />
              </div>
              <div className="min-w-0">
                <div className="text-lg lg:text-2xl font-bold text-primary truncate">${roi.yearlySavings.toLocaleString()}</div>
                <div className="text-xs lg:text-sm font-medium text-muted-foreground">Saved each year</div>
              </div>
            </div>
            <div className="flex items-center gap-3 lg:gap-4 p-3 lg:p-4 bg-card rounded-lg shadow-sm border">
              <div className="p-2 rounded-full bg-secondary/10 flex-shrink-0">
                <Clock className="h-5 w-5 lg:h-6 lg:w-6 text-secondary" />
              </div>
              <div className="min-w-0">
                <div className="text-lg lg:text-2xl font-bold text-secondary">{roi.hoursPerProviderPerWeek.toFixed(1)}</div>
                <div className="text-xs lg:text-sm font-medium text-muted-foreground">Hours saved per provider/week</div>
              </div>
            </div>
            <div className="flex items-center gap-3 lg:gap-4 p-3 lg:p-4 bg-card rounded-lg shadow-sm border">
              <div className="p-2 rounded-full bg-accent/10 flex-shrink-0">
                <Calendar className="h-5 w-5 lg:h-6 lg:w-6 text-accent-foreground" />
              </div>
              <div className="min-w-0">
                <div className="text-lg lg:text-2xl font-bold text-accent-foreground truncate">{roi.recoveredAppointments.toLocaleString()}</div>
                <div className="text-xs lg:text-sm font-medium text-muted-foreground">Recovered appointments/year</div>
              </div>
            </div>
            <div className="flex items-center gap-3 lg:gap-4 p-3 lg:p-4 bg-card rounded-lg shadow-sm border">
              <div className="p-2 rounded-full bg-muted/10 flex-shrink-0">
                <TrendingUp className="h-5 w-5 lg:h-6 lg:w-6 text-foreground" />
              </div>
              <div className="min-w-0">
                <div className="text-lg lg:text-2xl font-bold text-foreground truncate">{roi.totalHours.toLocaleString()}</div>
                <div className="text-xs lg:text-sm font-medium text-muted-foreground">Total hours saved annually</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ROICalculator;
