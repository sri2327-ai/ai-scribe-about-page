
import React, { useState, useRef, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { format } from "date-fns";

const DemoRequestForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    requirements: "",
    companyName: "",
  });

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left side - Testimonials */}
        <div className="space-y-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[#143151] mb-4">
              Request a Demo – See S10.AI in Action!
            </h2>
            <p className="text-xl text-[#143151]">
              Join 1,000+ Providers Using AI to Save Time & Enhance Care.
            </p>
          </div>
          
          <div className="hidden md:grid grid-cols-3 gap-6">
            {[
              {
                image: "/Humera.jpeg",
                name: "Dr. Humera Naqvi",
                role: "Internal Medicine, Medical Office Of Katy",
                quote: "With S10.AI, I focus on patients, not clerical tasks afterward."
              },
              {
                image: "/Dr-Lisbeth-Roy.png",
                name: "Dr. Lisbeth Roy",
                role: "Chief Executive Officer, Doctors Studio",
                quote: "S10.AI is effortless, customizable, and exceeds expectations every time!"
              },
              {
                image: "/Willem.jpeg",
                name: "Dr. Willem Gielen",
                role: "MD, Co-Founder, Nordjysk Speciallægeklinik",
                quote: "I've tried them all—S10.AI is hands down the best AI assistant"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-4 text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-sm text-gray-600 mb-2">{testimonial.quote}</p>
                <p className="font-semibold text-[#143151]">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Right side - Form */}
        <Card className="p-6 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="companyName">Company Name</Label>
              <Input
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Requirements</Label>
              <Select
                value={formData.requirements}
                onValueChange={(value) => setFormData(prev => ({ ...prev, requirements: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your requirements" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Schedule Demo</Label>
              <Button
                type="button"
                variant="outline"
                className="w-full justify-start text-left font-normal"
                onClick={() => setShowDatePicker(true)}
              >
                {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
              </Button>
            </div>

            <Button type="submit" className="w-full">
              Submit Request
            </Button>
          </form>
        </Card>
      </div>

      <Dialog open={showDatePicker} onOpenChange={setShowDatePicker}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Select a Date</DialogTitle>
          </DialogHeader>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={(date) => {
              setSelectedDate(date);
              setShowDatePicker(false);
            }}
            className="rounded-md border"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DemoRequestForm;
