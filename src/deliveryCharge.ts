export class DeliveryCharge {
  private rules: { limit: number; charge: number }[];

  constructor(rules: { limit: number; charge: number }[]) {
    this.rules = rules;
  }

  //calculates applicable delivery charge based on the total
  calculate(total: number): number {
    const matchingRule = this.rules.find((rule) => total < rule.limit);
    if (matchingRule) {
      return matchingRule.charge;
    }
    return 0;
  }
}

// creating a delivert charge object with required rules
export const deliveryCharges = new DeliveryCharge([
  { limit: 50, charge: 4.95 },
  { limit: 90, charge: 2.95 },
  { limit: Infinity, charge: 0 },
]);
