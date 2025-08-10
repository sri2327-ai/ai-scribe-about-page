
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';

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
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Input Section */}
      <div className="lg:col-span-2">
        <Card className="p-6 shadow-md">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Adjust for your practice</h3>
            <p className="text-muted-foreground">Organizations using S10.AI reduce no-shows by up to 70%</p>
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
      <div className="lg:col-span-1">
        <Card className="p-6 bg-gradient-to-br from-blue-50 to-green-50 shadow-md sticky top-4">
          <h4 className="text-xl font-bold mb-6 text-center">Your Savings</h4>
          <div className="grid grid-cols-1 gap-4">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-green-600">${roi.yearlySavings.toLocaleString()}</div>
              <div className="text-sm font-medium text-muted-foreground">Saved each year</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-blue-600">{roi.hoursPerProviderPerWeek.toFixed(1)}</div>
              <div className="text-sm font-medium text-muted-foreground">Hours saved per provider/week</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-purple-600">{roi.recoveredAppointments.toLocaleString()}</div>
              <div className="text-sm font-medium text-muted-foreground">Recovered appointments/year</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-orange-600">{roi.totalHours.toLocaleString()}</div>
              <div className="text-sm font-medium text-muted-foreground">Total hours saved annually</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ROICalculator;
