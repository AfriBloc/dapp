export interface Property {
  id: string;
  description: string;
  beds: number;
  rooms: string;
  landMeasurement: string;
  location: string;
  listingPrice: number;
  pricePerUnit: number;
  numberOfUnits: number;
  netRentalYield: string;
  annualizedROI: string;
  grossRentalYield: string;
  fundedDate: string;
  investmentCostBreakdown: {
    propertyCost: number;
    purchaseCosts: string;
    transactionFees: string;
    mofFees: string;
    totalInvestmentCost: number;
  };
  propertyDetails: {
    whatIsInIt: string[];
    amenities: string[];
    whyInvest: string[];
    propertyDocuments: string[];
  };
}
