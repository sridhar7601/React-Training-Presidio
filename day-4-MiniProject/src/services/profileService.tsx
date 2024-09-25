export const fetchProfiles = async (type: 'bride' | 'groom') => {
  const response = await fetch(`http://localhost:3001/profiles?type=${type}`);
  return await response.json();
};
