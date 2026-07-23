import { PortfolioData } from "@/types";

const BACKEND_JSON_URL = "https://raw.githubusercontent.com/HSBHasib/Shayokh-Portfolio-Server/main/src/data/portfolioData.json";

export async function fetchPortfolioData(): Promise<PortfolioData> {
  const response = await fetch(BACKEND_JSON_URL, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch portfolio data");
  }

  return response.json();
}
