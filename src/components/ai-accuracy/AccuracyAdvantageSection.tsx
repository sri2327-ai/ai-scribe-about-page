import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import * as RechartsPrimitive from "recharts";
import { cn } from "@/lib/utils";

const THEMES = { light: "", dark: ".dark" } as const;

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  );
};

type ChartContextProps = {
  config: ChartConfig;
};

const ChartContext = React.createContext<ChartContextProps | null>(null);

function useChart() {
  const context = React.useContext(ChartContext);

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }

  return context;
}

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([, config]) => config.theme || config.color
  );

  if (!colorConfig.length) {
    return null;
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color =
      itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ||
      itemConfig.color;
    return color ? `  --color-${key}: ${color};` : null;
  })
  .join("\n")}
}
`
          )
          .join("\n"),
      }}
    />
  );
};

function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}: React.ComponentProps<"div"> & {
  config: ChartConfig;
  children: React.ComponentProps<
    typeof RechartsPrimitive.ResponsiveContainer
  >["children"];
}) {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-slot="chart"
        data-chart={chartId}
        className={cn(
          "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
}

const AccuracyAdvantageSection: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0, 0, 0, 0]);

  const data = [
    {
      name: "Medical Error Reduction",
      capacity: 95,
      current: 95,
      allowed: 100,
      fill: "#059669",
    },
    {
      name: "Patient Safety Score",
      capacity: 98,
      current: 98,
      allowed: 100,
      fill: "#059669",
    },
    {
      name: "Clinical Decision Accuracy",
      capacity: 97,
      current: 97,
      allowed: 100,
      fill: "#059669",
    },
    {
      name: "Billing Accuracy",
      capacity: 99,
      current: 99,
      allowed: 100,
      fill: "#059669",
    },
    {
      name: "Clinician Trust Score",
      capacity: 96,
      current: 96,
      allowed: 100,
      fill: "#059669",
    },
    {
      name: "Operational Efficiency",
      capacity: 94,
      current: 94,
      allowed: 100,
      fill: "#059669",
    },
  ];

  useEffect(() => {
    if (isInView) {
      data.forEach((item, index) => {
        setTimeout(() => {
          const startTime = Date.now();
          const duration = 1500;
          
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.round(item.capacity * easeOutCubic);
            
            setAnimatedValues(prev => {
              const newValues = [...prev];
              newValues[index] = currentValue;
              return newValues;
            });
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          
          requestAnimationFrame(animate);
        }, index * 200);
      });
    }
  }, [isInView]);

  const chartConfig = {
    capacity: {
      label: "Capacity",
      color: "hsl(var(--primary))",
    },
  } satisfies ChartConfig;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={sectionRef} className="relative w-full bg-black text-white py-16 sm:py-20 lg:py-28">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light mb-3 sm:mb-4 text-white leading-tight"
          >
            The S10.ai Accuracy Advantage for Your Practice
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg lg:text-xl leading-relaxed text-white/80 max-w-3xl mx-auto"
          >
            Our focus on accuracy delivers tangible benefits across all aspects of your practice
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {data.map((item, index) => (
            <motion.div key={item.name} variants={itemVariants} custom={index}>
              <Card className="p-3 sm:p-4 bg-black border-white/10 hover:border-teal-500/40 hover:shadow-[0_4px_20px_rgba(20,184,166,0.2)] hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-0 flex items-center space-x-3 sm:space-x-4">
                  <div className="relative flex items-center justify-center">
                    <ChartContainer
                      config={chartConfig}
                      className="h-[70px] w-[70px] sm:h-[80px] sm:w-[80px]"
                    >
                      <RechartsPrimitive.RadialBarChart
                        data={[{ ...item, capacity: animatedValues[index] }]}
                        innerRadius={25}
                        outerRadius={50}
                        barSize={5}
                        startAngle={90}
                        endAngle={-270}
                      >
                        <RechartsPrimitive.PolarAngleAxis
                          type="number"
                          domain={[0, 100]}
                          angleAxisId={0}
                          tick={false}
                          axisLine={false}
                        />
                        <RechartsPrimitive.RadialBar
                          dataKey="capacity"
                          background
                          cornerRadius={10}
                          fill={item.fill}
                          angleAxisId={0}
                        />
                      </RechartsPrimitive.RadialBarChart>
                    </ChartContainer>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm sm:text-base font-medium text-white">
                        {animatedValues[index]}%
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <dt className="text-sm sm:text-base font-medium text-white leading-tight truncate">
                      {item.name}
                    </dt>
                    <dd className="text-xs sm:text-sm text-white/70 mt-1">
                      Improvement Score
                    </dd>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AccuracyAdvantageSection;
