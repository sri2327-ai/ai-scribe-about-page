
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
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
  const data = [
    {
      name: "Medical Error Reduction",
      capacity: 95,
      current: 95,
      allowed: 100,
      fill: "#14b8a6",
    },
    {
      name: "Patient Safety Score",
      capacity: 98,
      current: 98,
      allowed: 100,
      fill: "#06b6d4",
    },
    {
      name: "Clinical Decision Accuracy",
      capacity: 97,
      current: 97,
      allowed: 100,
      fill: "#0ea5e9",
    },
    {
      name: "Billing Accuracy",
      capacity: 99,
      current: 99,
      allowed: 100,
      fill: "#3b82f6",
    },
    {
      name: "Clinician Trust Score",
      capacity: 96,
      current: 96,
      allowed: 100,
      fill: "#6366f1",
    },
    {
      name: "Operational Efficiency",
      capacity: 94,
      current: 94,
      allowed: 100,
      fill: "#8b5cf6",
    },
  ];

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
        staggerChildren: 0.2,
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
    <section className="relative w-full bg-black text-white py-20 sm:py-24 lg:py-32">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 text-white leading-tight"
          >
            The S10.ai Accuracy Advantage for Your Practice
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl leading-relaxed text-white/80 max-w-3xl mx-auto mb-4"
          >
            Our focus on accuracy delivers tangible benefits across all aspects of your practice
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-base leading-relaxed text-white/60 max-w-2xl mx-auto"
          >
            Experience measurable improvements in{" "}
            <span className="font-medium text-white">safety, efficiency, and outcomes</span>.{" "}
            <a
              href="#"
              className="inline-flex items-center gap-1 text-teal-400 hover:underline hover:underline-offset-4"
            >
              View detailed metrics
              <ExternalLink className="size-4" aria-hidden={true} />
            </a>
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
        >
          {data.map((item, index) => (
            <motion.div key={item.name} variants={itemVariants} custom={index}>
              <Card className="p-4 bg-black border-white/10 hover:border-teal-500/40 transition-colors duration-300">
                <CardContent className="p-0 flex items-center space-x-4">
                  <div className="relative flex items-center justify-center">
                    <ChartContainer
                      config={chartConfig}
                      className="h-[80px] w-[80px]"
                    >
                      <RechartsPrimitive.RadialBarChart
                        data={[item]}
                        innerRadius={30}
                        outerRadius={60}
                        barSize={6}
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
                      <span className="text-base font-medium text-white">
                        {item.capacity}%
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <dt className="text-sm font-medium text-white leading-tight">
                      {item.name}
                    </dt>
                    <dd className="text-sm text-white/70 mt-1">
                      Improvement Score
                    </dd>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-white/80">
            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
              <strong className="text-white">Reduced Risk:</strong> Medical errors minimized through validated AI accuracy
            </div>
            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
              <strong className="text-white">Improved Outcomes:</strong> Enhanced patient safety and care quality
            </div>
            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
              <strong className="text-white">Reliable Data:</strong> Confident clinical decision-making with accurate information
            </div>
            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
              <strong className="text-white">Accurate Billing:</strong> Fewer claim denials and improved revenue cycle
            </div>
            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
              <strong className="text-white">Increased Trust:</strong> Clinician confidence and reduced rework
            </div>
            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
              <strong className="text-white">Enhanced Efficiency:</strong> Streamlined operations and workflow optimization
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AccuracyAdvantageSection;
