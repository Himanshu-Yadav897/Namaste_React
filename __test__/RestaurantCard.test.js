import RestaurantCard from "../src/components/RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("Should render RestaurantCard component with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Hotel Sai Nath & Sai Restaurant");
  expect(name).toBeInTheDocument();
});
