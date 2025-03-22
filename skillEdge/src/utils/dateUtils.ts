export const getStartOfYear = () => {
  const now = new Date();
  return new Date(now.getFullYear(), 0, 1);
};

export const getContributionLevel = (count: number): number => {
  if (count === 0) return 0;
  if (count <= 2) return 1;
  if (count <= 4) return 2;
  if (count <= 6) return 3;
  return 4;
};

export const generateContributions = () => {
  const startDate = getStartOfYear();
  const today = new Date();
  const contributions = [];
  
  for (let d = new Date(startDate); d <= today; d.setDate(d.getDate() + 1)) {
    contributions.push({
      date: d.toISOString().split('T')[0],
      count: Math.floor(Math.random() * 8)
    });
  }
  
  return contributions;
};