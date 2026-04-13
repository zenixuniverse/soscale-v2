'use client';

export default function SecurityInfo() {
  const securityFeatures = [
    { icon: '🔒', text: 'All credentials are encrypted before storage' },
    { icon: '👀', text: 'Only authorized team members can access your credentials' },
    { icon: '🔐', text: 'Industry-standard AES-256 encryption' },
    { icon: '📧', text: "You'll be notified when accounts are set up" },
    { icon: '⭐', text: 'Primary account is shown by default on your dashboard' },
  ];
  
  return (
    <div className="card">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center">
          <span className="text-lg">✓</span>
        </div>
        <h3 className="text-lg font-bold">Security & Privacy</h3>
      </div>
      
      <div className="space-y-3">
        {securityFeatures.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <span className="text-lg">{feature.icon}</span>
            <p className="text-sm text-text-secondary pt-0.5">{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
