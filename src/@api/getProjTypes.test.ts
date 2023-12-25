import { getProjTypes } from './getProjTypes';
import { describe, it, expect } from '@jest/globals';

describe('Get Project Types', () => {
  it('should retrieve all project types', async () => {
    const result = await getProjTypes();

    expect(result)
      .toEqual(expect.arrayContaining([
        expect.objectContaining({
          $id: expect.objectContaining({ value: expect.any(String) }),
        }),
      ]));
  });
});