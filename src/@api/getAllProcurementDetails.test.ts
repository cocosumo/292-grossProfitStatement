// Import the function you're testing
import { getAllProcurementDetails } from './getAllProcurementDetails';
import { describe, expect, it } from '@jest/globals';


describe('getAllProcurementDetails', () => {
  it('should get all procurement records', async () => {

    // Act
    const result = await getAllProcurementDetails();

    console.log(result.length);

    // Assert
    expect(result.length).toBeGreaterThan(0);
  });
});