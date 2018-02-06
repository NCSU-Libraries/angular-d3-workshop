// The interface is what sets the TypeScript types for the data that we are bringing into the application. By having types for data it can reduce errors.
export interface Fire {
  id: number;
  Name: string;
  Cause: string;
  Date: string;
  County: string;
  Structures: number;
  Acres: number;
  Deaths: number;
}
