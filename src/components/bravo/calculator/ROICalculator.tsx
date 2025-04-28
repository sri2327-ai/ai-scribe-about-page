
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';

interface ROICalculatorProps {
  onCalculate?: (data: { monthly: number; yearly: number; multiplier: number }) => void;
}

export const ROICalculator: React.FC<ROICalculatorProps> = ({ onCalculate }) => {
  const [patientsPerDay, setPatientsPerDay] = useState(20);
  const [workingDays, setWorkingDays] = useState(22);
  const [noShowRate, setNoShowRate] = useState(15);
  
  const calculateRoi = () => {
    // Simple ROI calculation
    const monthlyPatients = patientsPerDay * workingDays;
    const currentNoShows = Math.round(monthlyPatients * (noShowRate / 100));
    const newNoShowRate = noShowRate * 0.4; // 60% reduction
    const newNoShows = Math.round(monthlyPatients * (newNoShowRate / 100));
    const savedAppointments = currentNoShows - newNoShows;
    
    // Assuming average revenue of $150 per appointment
    const additionalRevenue = savedAppointments * 150;
    
    return {
      monthlyPatients,
      currentNoShows,
      newNoShows,
      savedAppointments,
      additionalRevenue
    };
  };

  const roi = calculateRoi();

  useEffect(() => {
    if (onCalculate) {
      onCalculate({
        monthly: roi.additionalRevenue,
        yearly: roi.additionalRevenue * 12,
        multiplier: roi.additionalRevenue > 0 ? roi.additionalRevenue / 1000 : 0
      });
    }
  }, [roi.additionalRevenue, onCalculate]);

  return (
    <Card className="p-6 shadow-md">
      <h3 className="text-2xl font-bold mb-6">ROI Calculator</h3>
      
      <div className="space-y-8">
        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Patients Per Day</span>
            <span className="font-bold">{patientsPerDay}</span>
          </div>
          <Slider 
            value={[patientsPerDay]} 
            onValueChange={values => setPatientsPerDay(values[0])}
            min={5}
            max={50}
            step={1}
          />
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Working Days per Month</span>
            <span className="font-bold">{workingDays}</span>
          </div>
          <Slider 
            value={[workingDays]} 
            onValueChange={values => setWorkingDays(values[0])}
            min={10}
            max={30}
            step={1}
          />
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Current No-Show Rate (%)</span>
            <span className="font-bold">{noShowRate}%</span>
          </div>
          <Slider 
            value={[noShowRate]} 
            onValueChange={values => setNoShowRate(values[0])}
            min={5}
            max={30}
            step={1}
          />
        </div>
        
        <div className="border-t pt-6">
          <h4 className="text-xl font-bold mb-4">Your ROI Potential</h4>
          
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Monthly Appointments</span>
              <span className="font-bold">{roi.monthlyPatients}</span>
            </div>
            <div className="flex justify-between">
              <span>Current Monthly No-Shows</span>
              <span className="font-bold">{roi.currentNoShows}</span>
            </div>
            <div className="flex justify-between">
              <span>New Monthly No-Shows</span>
              <span className="font-bold">{roi.newNoShows}</span>
            </div>
            <div className="flex justify-between">
              <span>Saved Appointments</span>
              <span className="font-bold">{roi.savedAppointments}</span>
            </div>
            <div className="flex justify-between text-lg">
              <span className="font-bold">Additional Monthly Revenue</span>
              <span className="font-bold text-green-600">${roi.additionalRevenue.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ROICalculator;
