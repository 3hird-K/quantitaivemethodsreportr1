'use client';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Navbar } from '@/components/Navbar';
import { SlideSection } from '@/components/SlideSection';
import { StatCard } from '@/components/StatCard';
import { FormulaBlock } from '@/components/FormulaBlock';
import { ChartCard } from '@/components/ChartCard';
import { DatasetTable } from '@/components/DatasetTable';
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { TracingBeam } from "@/components/ui/tracing-beam";
import {
  Database, Activity, MonitorPlay, Code2,
  ChevronDown, Cpu, HardDrive, CheckCircle2,
  TrendingUp, Lightbulb, AlertTriangle, ExternalLink,
  Terminal, Users
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const ramData = [
  { x: 8, y: 28500 }, { x: 8, y: 32000 }, { x: 16, y: 45000 }, { x: 16, y: 52000 },
  { x: 4, y: 18900 }, { x: 32, y: 85000 }, { x: 16, y: 38000 }, { x: 8, y: 39500 },
  { x: 12, y: 35500 }, { x: 64, y: 145000 }, { x: 8, y: 27900 }, { x: 16, y: 46000 },
  { x: 4, y: 22000 }, { x: 32, y: 65000 }, { x: 8, y: 24500 }, { x: 16, y: 38000 },
  { x: 8, y: 31500 }, { x: 4, y: 17500 }, { x: 16, y: 54000 }, { x: 32, y: 62000 },
  { x: 8, y: 29000 }, { x: 16, y: 44500 }, { x: 8, y: 33000 }, { x: 4, y: 21000 },
  { x: 16, y: 55500 }, { x: 32, y: 82000 }, { x: 8, y: 28200 }, { x: 16, y: 43800 },
  { x: 12, y: 34000 }, { x: 16, y: 53200 }
];

const ssdData = [
  { x: 256, y: 28500 }, { x: 512, y: 32000 }, { x: 512, y: 45000 }, { x: 1024, y: 52000 },
  { x: 128, y: 18900 }, { x: 1024, y: 85000 }, { x: 256, y: 38000 }, { x: 1024, y: 39500 },
  { x: 512, y: 35500 }, { x: 2048, y: 145000 }, { x: 256, y: 27900 }, { x: 512, y: 46000 },
  { x: 256, y: 22000 }, { x: 512, y: 65000 }, { x: 128, y: 24500 }, { x: 256, y: 38000 },
  { x: 512, y: 31500 }, { x: 128, y: 17500 }, { x: 1024, y: 54000 }, { x: 512, y: 62000 },
  { x: 256, y: 29000 }, { x: 512, y: 44500 }, { x: 512, y: 33000 }, { x: 256, y: 21000 },
  { x: 1024, y: 55500 }, { x: 1024, y: 82000 }, { x: 256, y: 28200 }, { x: 512, y: 43800 },
  { x: 256, y: 34000 }, { x: 1024, y: 53200 }
];

export default function Home() {
  const [isPythonRunning, setIsPythonRunning] = useState(false);
  const [pythonHasRun, setPythonHasRun] = useState(false);
  const [teamIndex, setTeamIndex] = useState(0);

  const handleRunPython = () => {
    setIsPythonRunning(true);
    setTimeout(() => {
      setIsPythonRunning(false);
      setPythonHasRun(true);
      setTimeout(() => {
        document.getElementById('model-results')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }, 1500);
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 100,
    });
  }, []);

  const scrollToProblem = () => {
    document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-background selection:bg-primary/30">
      <Navbar />

      <div className="fixed inset-0 z-0 pointer-events-none">
        <BackgroundBeamsWithCollision className="h-screen w-full bg-transparent">
          <div />
        </BackgroundBeamsWithCollision>
      </div>

      <div className="relative z-10 flex flex-col">
        {/* Intro Landing */}
        <SlideSection id="intro" className="p-0 m-0 relative min-h-screen flex items-center justify-center">
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto space-y-8 relative z-10 w-full px-6 pb-24">
            <div data-aos="fade-up" className="inline-block px-5 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md text-sm font-bold tracking-widest uppercase text-primary shadow-[0_0_30px_-5px_rgba(var(--color-primary),0.3)]">
              Quantitative Methods (IT324)
            </div>
            <h1 data-aos="fade-up" data-aos-delay="100" className="text-4xl md:text-6xl font-extrabold tracking-tighter text-foreground leading-[1.1]">
              Data-Driven Insights: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient">
                Statistical Evaluation of Hardware Markets
              </span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="200" className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              A Multiple Regression Analysis of Laptop Specifications & Pricing Elasticity. To: Cheryll S. Pagal, MSAMS.
            </p>
            <div data-aos="fade-up" data-aos-delay="250" className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://docs.google.com/document/d/1U_g_16UGFC_wm06vi9IoxVh4DBjmlpxI-2_abbg3MSo/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 font-semibold text-sm transition-all hover:scale-105 active:scale-95 duration-200 backdrop-blur-md shadow-[0_0_20px_-5px_rgba(var(--color-primary),0.3)]"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z" />
                </svg>
                View Research Document
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
            <button
              onClick={scrollToProblem}
              data-aos="fade-up"
              data-aos-delay="350"
              className="animate-bounce p-4 mt-6 rounded-full bg-secondary hover:bg-secondary/80 transition-colors border border-border"
            >
              <ChevronDown className="w-6 h-6 text-primary" />
            </button>
          </div>
        </SlideSection>

        {/* Section 1: Problem */}
        <SlideSection id="problem" title="The Economics of Computing Power">
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="group bg-card/60 backdrop-blur-xl border border-border/50 p-10 rounded-3xl shadow-sm flex flex-col justify-center space-y-6 transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5" data-aos="fade-right">
              <h3 className="text-3xl font-bold text-foreground">The Context</h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                For students and IT professionals, investing in a laptop is a critical financial decision. However, retail pricing models used by manufacturers often obscure the true cost of the underlying hardware components, leading to potential overspending. How much do specific configurations actually dictate the final retail price?
              </p>
            </div>
            <div className="space-y-6">
              <div className="group bg-card/60 backdrop-blur-xl border border-border/50 border-l-4 border-l-destructive p-8 rounded-3xl shadow-sm transition-all duration-500 hover:-translate-x-2" data-aos="fade-up" data-aos-delay="100">
                <h4 className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-3">Null Hypothesis (H₀)</h4>
                <p className="text-2xl font-semibold text-foreground">Internal hardware capacity (RAM & SSD) has <span className="text-destructive relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-destructive/30">no significant effect</span> on the retail price.</p>
              </div>
              <div className="group bg-card/60 backdrop-blur-xl border border-border/50 border-l-4 border-l-primary p-8 rounded-3xl shadow-sm transition-all duration-500 hover:-translate-x-2" data-aos="fade-up" data-aos-delay="200">
                <h4 className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-3">Alternative Hypothesis (Hₐ)</h4>
                <p className="text-2xl font-semibold text-foreground">RAM and SSD capacities are <span className="text-primary relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary/30">statistically significant predictors</span> of a laptop's market price.</p>
              </div>
            </div>
          </div>
        </SlideSection>

        {/* Section 2: Method */}
        <SlideSection id="method" title="Analytical Methodology & Data">
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <StatCard
              title="Methodology"
              value="Multiple Linear Regression"
              description="Models the linear relationship between the continuous price and multiple independent components."
              icon={Activity}
              delay={0}
            />
            <StatCard
              title="Data Sourcing"
              value="Kaggle Dataset"
              description="A representative sample of N=30 modern laptops, ensuring diverse manufacturer representation."
              icon={Database}
              delay={100}
            />
            <StatCard
              title="Variables"
              value={
                <div className="text-xl font-mono text-muted-foreground space-y-2 mt-2">
                  <div>X₁ : <span className="text-primary">RAM (GB)</span></div>
                  <div>X₂ : <span className="text-primary">SSD (GB)</span></div>
                  <div className="pt-2 border-t border-border text-foreground">Y : Price (PHP)</div>
                </div>
              }
              icon={MonitorPlay}
              delay={200}
            />
          </div>

          <div className="flex justify-center mt-6" data-aos="fade-up" data-aos-delay="300">
            <a href="https://www.kaggle.com/datasets/muhammetvarl/laptop-price" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 rounded-full transition-colors font-medium hover:scale-105 active:scale-95 duration-200">
              View Kaggle Dataset Source <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-muted-foreground mt-6" data-aos="fade-up" data-aos-delay="400">
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              <Code2 className="w-5 h-5 text-primary" />
              Computational Tools: Python, Pandas, Scikit-learn, Matplotlib
            </p>
          </div>
          <div className="mt-8 w-full">
            <DatasetTable />
          </div>
        </SlideSection>

        {/* Section 3: Model */}
        <SlideSection id="model" title="The Predictive Model">
          <div className="w-full bg-[#1e1e1e] rounded-2xl overflow-hidden shadow-2xl border border-border/50 font-mono text-sm mt-8 flex flex-col" data-aos="fade-up">
            <div className="flex items-center justify-between px-4 py-3 bg-[#2d2d2d] border-b border-[#404040]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-[#858585] text-xs flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5" />
                analysis.py
              </div>
              <button
                onClick={handleRunPython}
                disabled={isPythonRunning || pythonHasRun}
                className="flex items-center gap-2 px-3 py-1.5 bg-primary/20 text-primary hover:bg-primary/30 rounded-md transition-all disabled:opacity-50 text-xs font-semibold"
              >
                {isPythonRunning ? (
                  <>
                    <div className="w-3 h-3 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                    Executing...
                  </>
                ) : pythonHasRun ? (
                  <>
                    <CheckCircle2 className="w-3 h-3" />
                    Model Fitted
                  </>
                ) : (
                  <>
                    <MonitorPlay className="w-3 h-3" />
                    Run Analysis
                  </>
                )}
              </button>
            </div>

            <div className={`grid ${isPythonRunning || pythonHasRun ? 'lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#404040]' : 'grid-cols-1'}`}>
              {/* Left Pane: Code Editor */}
              <div className="p-6 overflow-auto text-[#d4d4d4] text-sm leading-relaxed bg-[#1e1e1e] h-[500px] custom-scrollbar">
                <pre className="whitespace-pre">
                  <code className="language-python">
                    <span className="text-[#c586c0]">import</span> pandas <span className="text-[#c586c0]">as</span> pd{"\n"}
                    <span className="text-[#c586c0]">import</span> numpy <span className="text-[#c586c0]">as</span> np{"\n"}
                    <span className="text-[#c586c0]">import</span> matplotlib.pyplot <span className="text-[#c586c0]">as</span> plt{"\n"}
                    <span className="text-[#c586c0]">from</span> sklearn.linear_model <span className="text-[#c586c0]">import</span> LinearRegression{"\n"}
                    {"\n"}
                    <span className="text-[#6a9955]"># 1. Prepare the dataset from your research report</span>{"\n"}
                    data = {"{"}{"\n"}
                    <span className="text-[#ce9178]">'RAM_GB'</span>: [8, 8, 16, 16, 4, 32, 16, 8, 12, 64, 8, 16, 4, 32, 8, 16, 8, 4, 16, 32, 8, 16, 8, 4, 16, 32, 8, 16, 12, 16],{"\n"}
                    <span className="text-[#ce9178]">'SSD_GB'</span>: [256, 512, 512, 1024, 128, 1024, 256, 1024, 512, 2048, 256, 512, 256, 512, 128, 256, 512, 128, 1024, 512, 256, 512, 512, 256, 1024, 1024, 256, 512, 256, 1024],{"\n"}
                    <span className="text-[#ce9178]">'Price_PHP'</span>: [28500, 32000, 45000, 52000, 18900, 85000, 38000, 39500, 35500, 145000, 27900, 46000, 22000, 65000, 24500, 38000, 31500, 17500, 54000, 62000, 29000, 44500, 33000, 21000, 55500, 82000, 28200, 43800, 34000, 53200]{"\n"}
                    {"}"}{"\n"}
                    {"\n"}
                    df = pd.DataFrame(data){"\n"}
                    {"\n"}
                    <span className="text-[#6a9955]"># 2. Define Independent (X) and Dependent (y) variables</span>{"\n"}
                    X = df[[<span className="text-[#ce9178]">'RAM_GB'</span>, <span className="text-[#ce9178]">'SSD_GB'</span>]]{"\n"}
                    y = df[<span className="text-[#ce9178]">'Price_PHP'</span>]{"\n"}
                    {"\n"}
                    <span className="text-[#6a9955]"># 3. Create and Fit the Multiple Regression Model</span>{"\n"}
                    model = LinearRegression(){"\n"}
                    model.fit(X, y){"\n"}
                    {"\n"}
                    <span className="text-[#6a9955]"># 4. Extract Coefficients</span>{"\n"}
                    alpha = model.intercept_{"\n"}
                    beta1, beta2 = model.coef_{"\n"}
                    r_squared = model.score(X, y){"\n"}
                    {"\n"}
                    <span className="text-[#dcdcaa]">print</span>(<span className="text-[#ce9178]">"--- REGRESSION RESULTS ---"</span>){"\n"}
                    <span className="text-[#dcdcaa]">print</span>(<span className="text-[#ce9178]">f"Intercept (alpha): </span><span className="text-[#569cd6]">{"{"}</span>alpha<span className="text-[#569cd6]">:.2f{"}"}"</span>){"\n"}
                    <span className="text-[#dcdcaa]">print</span>(<span className="text-[#ce9178]">f"RAM Coefficient (beta1): </span><span className="text-[#569cd6]">{"{"}</span>beta1<span className="text-[#569cd6]">:.2f{"}"}"</span>){"\n"}
                    <span className="text-[#dcdcaa]">print</span>(<span className="text-[#ce9178]">f"SSD Coefficient (beta2): </span><span className="text-[#569cd6]">{"{"}</span>beta2<span className="text-[#569cd6]">:.2f{"}"}"</span>){"\n"}
                    <span className="text-[#dcdcaa]">print</span>(<span className="text-[#ce9178]">f"R-squared: </span><span className="text-[#569cd6]">{"{"}</span>r_squared<span className="text-[#569cd6]">:.4f{"}"}"</span>){"\n"}
                    {"\n"}
                    <span className="text-[#6a9955]"># 5. Visualization: Price vs RAM</span>{"\n"}
                    plt.figure(figsize=(12, 5)){"\n"}
                    {"\n"}
                    plt.subplot(1, 2, 1){"\n"}
                    plt.scatter(df[<span className="text-[#ce9178]">'RAM_GB'</span>], df[<span className="text-[#ce9178]">'Price_PHP'</span>], color=<span className="text-[#ce9178]">'blue'</span>, alpha=0.7){"\n"}
                    plt.title(<span className="text-[#ce9178]">'Price vs RAM Capacity'</span>){"\n"}
                    plt.xlabel(<span className="text-[#ce9178]">'RAM (GB)'</span>){"\n"}
                    plt.ylabel(<span className="text-[#ce9178]">'Price (PHP)'</span>){"\n"}
                    plt.grid(<span className="text-[#569cd6]">True</span>, linestyle=<span className="text-[#ce9178]">'--'</span>, alpha=0.6){"\n"}
                    {"\n"}
                    <span className="text-[#6a9955]"># Visualization: Price vs SSD</span>{"\n"}
                    plt.subplot(1, 2, 2){"\n"}
                    plt.scatter(df[<span className="text-[#ce9178]">'SSD_GB'</span>], df[<span className="text-[#ce9178]">'Price_PHP'</span>], color=<span className="text-[#ce9178]">'green'</span>, alpha=0.7){"\n"}
                    plt.title(<span className="text-[#ce9178]">'Price vs SSD Storage'</span>){"\n"}
                    plt.xlabel(<span className="text-[#ce9178]">'SSD (GB)'</span>){"\n"}
                    plt.ylabel(<span className="text-[#ce9178]">'Price (PHP)'</span>)
                  </code>
                </pre>
              </div>

              {/* Right Pane: Output Terminal */}
              {(isPythonRunning || pythonHasRun) && (
                <div id="model-results" className="bg-[#141414] p-6 flex flex-col h-[500px] overflow-y-auto custom-scrollbar">
                  <div className="text-[#858585] text-xs mb-6 flex items-center gap-2 uppercase tracking-widest font-bold">
                    <Terminal className="w-4 h-4" />
                    Terminal Output
                  </div>

                  {isPythonRunning ? (
                    <div className="flex flex-col gap-2 font-mono text-[#d4d4d4]">
                      <div className="flex items-center gap-3 text-primary">
                        <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                        <span>$ python analysis.py</span>
                      </div>
                      <div className="animate-pulse text-[#858585]">Fitting multiple linear regression model...</div>
                    </div>
                  ) : (
                    <div className="animate-in fade-in zoom-in-95 duration-500 flex flex-col gap-6">
                      <div className="text-green-400 font-mono text-sm">
                        {">"} Process finished with exit code 0.
                      </div>

                      <div className="bg-card/30 p-4 rounded-xl border border-border/50">
                        <div className="text-center text-xl md:text-2xl font-bold tracking-tight mb-2">
                          <span className="text-foreground">Y = 10,117.75 + </span>
                          <span className="text-primary">1,469.95(X₁)</span>
                          <span className="text-foreground"> + </span>
                          <span className="text-primary">20.35(X₂)</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-card/40 border border-border/50 p-4 rounded-xl">
                          <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">Intercept (α)</div>
                          <div className="text-lg font-bold text-foreground">₱10,117.75</div>
                          <div className="text-[11px] text-muted-foreground mt-1 leading-snug">Base structural cost without RAM/SSD (chassis, screen, etc.)</div>
                        </div>
                        <div className="bg-card/40 border border-border/50 p-4 rounded-xl">
                          <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">RAM (β₁)</div>
                          <div className="text-lg font-bold text-foreground">₱1,469.95</div>
                          <div className="text-[11px] text-muted-foreground mt-1 leading-snug">Marginal cost added per individual GB of RAM</div>
                        </div>
                        <div className="bg-card/40 border border-border/50 p-4 rounded-xl">
                          <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">SSD (β₂)</div>
                          <div className="text-lg font-bold text-foreground">₱20.35</div>
                          <div className="text-[11px] text-muted-foreground mt-1 leading-snug">Marginal cost added per individual GB of SSD</div>
                        </div>
                        <div className="bg-card/40 border border-border/50 p-4 rounded-xl">
                          <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">R-Squared</div>
                          <div className="text-lg font-bold text-foreground">0.9921</div>
                          <div className="text-[11px] text-muted-foreground mt-1 leading-snug">Explains an exceptional 99.2% of total price variance</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </SlideSection>

        {/* Section 4: Visuals */}
        <SlideSection id="visuals" title="Empirical Visualizations">
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <ChartCard
              title="Price vs Memory Capacity (RAM)"
              data={ramData}
              xLabel="RAM (GB)"
              yLabel="Price (PHP)"
              color="var(--color-primary)"
              delay={0}
            />
            <ChartCard
              title="Price vs Storage Capacity (SSD)"
              data={ssdData}
              xLabel="SSD (GB)"
              yLabel="Price (PHP)"
              color="var(--color-primary)"
              delay={200}
            />
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-6">
            <div data-aos="fade-up" data-aos-delay="100" className="text-center text-muted-foreground bg-card border border-border p-4 rounded-xl shadow-sm">
              <strong className="text-foreground">Chart A:</strong> Demonstrates a highly elastic price response to RAM upgrades, showing steep tier jumps.
            </div>
            <div data-aos="fade-up" data-aos-delay="300" className="text-center text-muted-foreground bg-card border border-border p-4 rounded-xl shadow-sm">
              <strong className="text-foreground">Chart B:</strong> Reveals a relatively inelastic and much more gradual price curve for storage expansions.
            </div>
          </div>
        </SlideSection>

        {/* Section 5: Insights */}
        <SlideSection id="insights" title="Statistical Inferences">
          <div className="flex flex-col gap-8 mt-12">
            <div className="relative group bg-primary/10 border border-primary/30 rounded-3xl text-center py-12 transition-all duration-500 hover:border-primary hover:shadow-[0_0_40px_rgba(var(--color-primary),0.2)] overflow-hidden" data-aos="zoom-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="text-3xl font-bold text-primary flex items-center justify-center gap-4 relative z-10">
                <CheckCircle2 className="w-10 h-10 animate-pulse" />
                Null Hypothesis Rejected (p &lt; 0.001)
              </h3>
              <p className="text-foreground mt-6 text-xl relative z-10">The alternative hypothesis is strongly supported. Hardware configurations dictate the price.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-4">
              <div className="group bg-card/60 backdrop-blur-xl border border-border/50 rounded-3xl p-10 shadow-sm relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10" data-aos="fade-right" data-aos-delay="100">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 right-4 p-4 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500 group-hover:scale-110"><Cpu className="w-32 h-32 text-primary" /></div>
                <h4 className="text-2xl font-bold text-foreground mb-3 relative z-10">+8GB RAM Upgrades</h4>
                <p className="text-5xl font-extrabold text-primary mb-6 relative z-10">≈ ₱11,760</p>
                <p className="text-lg text-muted-foreground relative z-10 leading-relaxed">Memory upgrades carry a substantial market premium. Manufacturers utilize RAM tiers to rapidly drive up the retail price margin.</p>
              </div>

              <div className="group bg-card/60 backdrop-blur-xl border border-border/50 rounded-3xl p-10 shadow-sm relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10" data-aos="fade-left" data-aos-delay="200">
                <div className="absolute inset-0 bg-gradient-to-bl from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 right-4 p-4 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500 group-hover:scale-110"><HardDrive className="w-32 h-32 text-foreground" /></div>
                <h4 className="text-2xl font-bold text-foreground mb-3 relative z-10">+256GB SSD Upgrades</h4>
                <p className="text-5xl font-extrabold text-foreground mb-6 relative z-10">≈ ₱5,210</p>
                <p className="text-lg text-muted-foreground relative z-10 leading-relaxed">Storage space is highly commoditized, resulting in a much lower price-per-GB impact on the final retail cost.</p>
              </div>
            </div>
          </div>
        </SlideSection>

        {/* Section 6: Conclusion */}
        <SlideSection id="conclusion" title="Strategic Recommendations">
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="group bg-card/60 backdrop-blur-xl border border-border/50 p-8 rounded-3xl shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/50 relative overflow-hidden" data-aos="fade-up" data-aos-delay="0">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 relative z-10">
                <Lightbulb className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-6 relative z-10">For IT Students</h3>
              <ul className="space-y-4 text-muted-foreground relative z-10">
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <span>Prioritize higher RAM capacities (e.g., 16GB) for performance longevity and local compiling.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <span>Leverage external drives or cloud solutions for storage to optimize your budget.</span>
                </li>
              </ul>
            </div>

            <div className="group bg-card/60 backdrop-blur-xl border border-border/50 p-8 rounded-3xl shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-destructive/10 hover:border-destructive/50 relative overflow-hidden" data-aos="fade-up" data-aos-delay="100">
              <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-14 h-14 rounded-2xl bg-destructive/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 relative z-10">
                <AlertTriangle className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-6 relative z-10">Market Awareness</h3>
              <ul className="space-y-4 text-muted-foreground relative z-10">
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="w-6 h-6 text-destructive shrink-0 mt-0.5" />
                  <span>Avoid manufacturer-installed SSD upgrades if the tier jump exceeds ₱20 per GB.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="w-6 h-6 text-destructive shrink-0 mt-0.5" />
                  <span>Aftermarket storage upgrades are vastly more economical if the chassis permits.</span>
                </li>
              </ul>
            </div>

            <div className="group bg-card/60 backdrop-blur-xl border border-border/50 p-8 rounded-3xl shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/10 hover:border-accent/50 relative overflow-hidden" data-aos="fade-up" data-aos-delay="200">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 relative z-10">
                <TrendingUp className="w-7 h-7 text-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-6 relative z-10">Future Studies</h3>
              <ul className="space-y-4 text-muted-foreground relative z-10">
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="w-6 h-6 text-foreground shrink-0 mt-0.5" />
                  <span>Expand the model by integrating categorical variables like CPU tier (e.g., Core i5 vs i7).</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="w-6 h-6 text-foreground shrink-0 mt-0.5" />
                  <span>Account for the remaining 0.8% variance.</span>
                </li>
              </ul>
            </div>
          </div>
        </SlideSection>

        {/* Section 7: Team */}
        <SlideSection id="team" title="Meet Our Team">
          <p className="text-center text-muted-foreground mt-4 mb-12" data-aos="fade-up">The researchers behind this quantitative analysis.</p>
          {(() => {
            const members = [
              { name: "Benjamin Requinto", file: "Benjamin.png", role: "Researcher" },
              { name: "Gaile Artajo", file: "Gaile.jpg", role: "Researcher" },
              { name: "Neil Dime", file: "neil.jpg", role: "Researcher" },
              { name: "Rocel Mae Saguing", file: "Rocel.jpg", role: "Researcher" },
              { name: "Ryn Raguro", file: "ryn.jpg", role: "Researcher" },
              { name: "Cheryll S. Pagal", file: "cheryll.jpg", role: "Instructor" },
            ];
            const perPage = 3;
            const totalPages = Math.ceil(members.length / perPage);
            return (
              <div className="relative px-8">
                {/* Cards viewport with smooth slide */}
                <div className="overflow-hidden rounded-3xl">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${teamIndex * 100}%)` }}
                  >
                    {Array.from({ length: totalPages }).map((_, pageIdx) => (
                      <div key={pageIdx} className="w-full shrink-0 grid grid-cols-3 gap-6 py-2">
                        {members.slice(pageIdx * perPage, pageIdx * perPage + perPage).map((member) => (
                          <div
                            key={member.name}
                            className="group flex flex-col items-center gap-4 bg-card/60 backdrop-blur-xl border border-border/50 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30"
                          >
                            <div className="relative">
                              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
                              <Avatar className="w-28 h-28 relative border-2 border-border group-hover:border-primary/50 transition-colors duration-300">
                                <AvatarImage src={`/assets/profile/${member.file}`} alt={member.name} className="object-cover" />
                                <AvatarFallback className="bg-primary/10 text-primary font-bold text-xl">
                                  {member.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}
                                </AvatarFallback>
                              </Avatar>
                            </div>
                            <div className="text-center">
                              <p className="font-semibold text-foreground text-base leading-tight">{member.name}</p>
                              <p className={`text-xs mt-1 ${member.role === 'Instructor' ? 'text-primary font-semibold' : 'text-muted-foreground'}`}>{member.role}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Prev — hugs left edge of card area */}
                <button
                  onClick={() => setTeamIndex(i => Math.max(0, i - 1))}
                  disabled={teamIndex === 0}
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-card/90 border border-border/50 backdrop-blur-md flex items-center justify-center text-foreground hover:bg-primary/10 hover:border-primary/30 hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-md z-10"
                  aria-label="Previous"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                </button>

                {/* Next — hugs right edge of card area */}
                <button
                  onClick={() => setTeamIndex(i => Math.min(totalPages - 1, i + 1))}
                  disabled={teamIndex === totalPages - 1}
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-card/90 border border-border/50 backdrop-blur-md flex items-center justify-center text-foreground hover:bg-primary/10 hover:border-primary/30 hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-md z-10"
                  aria-label="Next"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            );
          })()}

          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(6 / 3) }).map((_, i) => (
              <button
                key={i}
                onClick={() => setTeamIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${teamIndex === i ? 'bg-primary w-6' : 'bg-border hover:bg-primary/50'
                  }`}
              />
            ))}
          </div>
        </SlideSection>

        {/* Final Slide: Q&A — not in dock */}
        <section id="qa" className="relative min-h-screen flex items-center justify-center px-6 pb-32">
          <div className="flex flex-col items-center justify-center text-center space-y-10 max-w-3xl mx-auto" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md text-sm font-bold tracking-widest uppercase text-primary">
              Open Floor
            </div>

            <h2 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-foreground leading-none">
              Any{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient">
                Questions?
              </span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              We'd be happy to walk through any part of our methodology, data, or findings in more detail.
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-4">
              {/* <a
                href="#intro"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 font-semibold text-sm transition-all hover:scale-105 active:scale-95 duration-200 backdrop-blur-md"
              >
                ↑ Back to Top
              </a> */}
              <a
                href="https://docs.google.com/document/d/1U_g_16UGFC_wm06vi9IoxVh4DBjmlpxI-2_abbg3MSo/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card/60 hover:bg-card border border-border/50 text-foreground font-semibold text-sm transition-all hover:scale-105 active:scale-95 duration-200 backdrop-blur-md"
              >
                <ExternalLink className="w-4 h-4" />
                View Full Paper
              </a>
            </div>

            <p className="text-xs text-muted-foreground/50 pt-6">
              Quantitative Methods (IT324) · IT3R1 · 2026
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
