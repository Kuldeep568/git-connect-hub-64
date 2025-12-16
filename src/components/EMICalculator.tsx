import { useState, useMemo } from "react";
import { Slider } from "@/components/ui/slider";

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(8000000); // 80 Lakhs
  const [interestRate, setInterestRate] = useState(6.75);
  const [tenure, setTenure] = useState(20);

  const { emi, totalInterest, totalPayable } = useMemo(() => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 100 / 12;
    const months = tenure * 12;

    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    const totalPayable = emi * months;
    const totalInterest = totalPayable - principal;

    return {
      emi: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalPayable: Math.round(totalPayable),
    };
  }, [loanAmount, interestRate, tenure]);

  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)} Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)} Lac`;
    }
    return `₹${amount.toLocaleString("en-IN")}`;
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              EMI Calculator
            </h2>
            <p className="text-muted-foreground">
              Plan your home loan with our easy EMI calculator
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Inputs */}
            <div className="bg-card rounded-2xl p-6 shadow-soft border border-border space-y-8">
              {/* Loan Amount */}
              <div>
                <div className="flex justify-between mb-4">
                  <label className="text-sm text-muted-foreground">Loan Amount</label>
                  <span className="font-bold text-primary">{formatCurrency(loanAmount)}</span>
                </div>
                <Slider
                  value={[loanAmount]}
                  onValueChange={(value) => setLoanAmount(value[0])}
                  min={100000}
                  max={130000000}
                  step={100000}
                  className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary"
                />
                <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                  <span>₹1 Lac</span>
                  <span>₹13 Cr</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div>
                <div className="flex justify-between mb-4">
                  <label className="text-sm text-muted-foreground">Interest Rate (% P.A.)</label>
                  <span className="font-bold text-primary">{interestRate}%</span>
                </div>
                <Slider
                  value={[interestRate]}
                  onValueChange={(value) => setInterestRate(value[0])}
                  min={1}
                  max={30}
                  step={0.25}
                  className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary"
                />
                <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                  <span>1%</span>
                  <span>30%</span>
                </div>
              </div>

              {/* Tenure */}
              <div>
                <div className="flex justify-between mb-4">
                  <label className="text-sm text-muted-foreground">Loan Tenure</label>
                  <span className="font-bold text-primary">{tenure} Years</span>
                </div>
                <Slider
                  value={[tenure]}
                  onValueChange={(value) => setTenure(value[0])}
                  min={1}
                  max={30}
                  step={1}
                  className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary"
                />
                <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                  <span>1 Year</span>
                  <span>30 Years</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="bg-gradient-to-br from-primary to-coral-dark rounded-2xl p-6 text-primary-foreground">
              <div className="text-center mb-8">
                <p className="text-sm opacity-80 mb-2">Your Monthly Home EMI</p>
                <p className="text-4xl md:text-5xl font-bold">
                  ₹{emi.toLocaleString("en-IN")}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-t border-white/20">
                  <span className="opacity-80">Interest Amount</span>
                  <span className="font-bold">{formatCurrency(totalInterest)}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-t border-white/20">
                  <span className="opacity-80">Principal Amount</span>
                  <span className="font-bold">{formatCurrency(loanAmount)}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-t border-white/20">
                  <span className="opacity-80">Total Payable Amount</span>
                  <span className="font-bold text-lg">{formatCurrency(totalPayable)}</span>
                </div>
              </div>

              {/* Visual Breakdown */}
              <div className="mt-6">
                <div className="h-3 rounded-full bg-white/20 overflow-hidden">
                  <div
                    className="h-full bg-white rounded-full transition-all duration-500"
                    style={{
                      width: `${(loanAmount / totalPayable) * 100}%`,
                    }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-xs">
                  <span>Principal</span>
                  <span>Interest</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EMICalculator;
