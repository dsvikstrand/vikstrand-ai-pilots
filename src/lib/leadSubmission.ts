export interface LeadPayload {
  name: string;
  company: string;
  email: string;
  role: string;
  automationGoal: string;
  dataSources: string[];
  timeline: string;
  budgetRange?: string;
}

export async function submitLead(payload: LeadPayload): Promise<{ success: boolean; message: string }> {
  // This is a mock implementation
  // In production, replace with actual API call to /api/lead
  // e.g., await fetch('/api/lead', { method: 'POST', body: JSON.stringify(payload) })
  
  console.log('Lead submission:', payload);
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Mock success response
  return {
    success: true,
    message: 'Thank you! We\'ll be in touch within 24 hours.'
  };
}