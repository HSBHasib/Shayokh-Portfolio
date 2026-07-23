import { PortfolioData } from "@/types";

const BACKEND_JSON_URL = "https://raw.githubusercontent.com/HSBHasib/Shayokh-Portfolio-Server/main/data/portfolioData.json";

export async function fetchPortfolioData(): Promise<PortfolioData> {
  try {
    const response = await fetch(BACKEND_JSON_URL, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching portfolio data:", error);
    throw error;
  }
}
