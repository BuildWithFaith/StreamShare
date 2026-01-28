import Head from "next/head";

export default function VideoCallSeo() {
  const webApplicationData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "StreamShare Video Calling",
    description:
      "High-definition peer-to-peer video conferencing with AI virtual backgrounds, screen sharing, and secure end-to-end encryption.",
    applicationCategory: "CommunicationApplication",
    operatingSystem: "All",
    browserRequirements: "Requires WebRTC support",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1024",
    },
    featureList: [
      "AI-powered virtual background replacement",
      "One-click screen sharing for presentations",
      "HD video and crystal-clear audio quality",
      "Secure peer-to-peer connection with encryption",
      "Multiple camera and microphone support",
      "Noise cancellation and echo suppression",
      "Mobile-friendly responsive interface",
      "No downloads or installations required",
    ],
    screenshot: "https://streamshare.vercel.app/screenshots/video-call.png",
    author: {
      "@type": "Person",
      name: "Muhammad Wahaj",
      url: "https://contra.com/muhammadwahajofficiall_f1yj87dw/services",
    },
  };

  const howToData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Start a Video Call with StreamShare",
    description:
      "Step-by-step guide to starting a secure video conference using peer-to-peer technology",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Establish a Connection",
        text: "Connect with a peer by entering their Peer ID or sharing your own Peer ID on the home page.",
        url: "https://streamshare.vercel.app",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Go to Video Call",
        text: "Select 'Video Call' from the navigation menu once connected.",
        url: "https://streamshare.vercel.app/videocall",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Grant Permissions",
        text: "Allow your browser to access your camera and microphone when prompted.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Customize Your Appearance",
        text: "Optionally use AI-powered virtual backgrounds to maintain privacy or professional appearance.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Start Communicating",
        text: "Enjoy high-quality HD video and audio. Use screen sharing if you need to present during the call.",
      },
    ],
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://streamshare.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Video Call",
        item: "https://streamshare.vercel.app/videocall",
      },
    ],
  };

  return (
    <>
      <Head>
        {/* Preload critical assets if needed */}
        <link rel="preload" href="/background/livingroom.jpg" as="image" />
        <link rel="preload" href="/background/office.jpg" as="image" />
        {/* WebApplication structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webApplicationData),
          }}
        />
        {/* HowTo structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToData) }}
        />
        {/* Breadcrumb structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
        />
      </Head>

      <div className="sr-only" aria-hidden="false">
        <h1>Professional Video Conference Solution</h1>
        <p>
          Connect with anyone, anywhere with our high-quality video conferencing
          platform. No downloads required — just share your unique Peer ID and
          start talking face-to-face instantly with complete privacy.
        </p>

        <h2>Advanced Video Calling Features</h2>
        <ul>
          <li>Virtual background replacement with AI technology (Living Room, Office, Workspace)</li>
          <li>One-click screen sharing for smooth presentations</li>
          <li>Multiple camera and microphone support for professional setups</li>
          <li>Crystal-clear HD audio with advanced noise cancellation</li>
          <li>Secure peer-to-peer connections with end-to-end encryption</li>
          <li>Fully responsive - works on desktop, tablet, and mobile browsers</li>
          <li>Serverless architecture - your video streams never touch our servers</li>
        </ul>

        <h2>How to Start Your Meeting</h2>
        <ol>
          <li>Ensure you are connected to a peer via the Home page</li>
          <li>Open the Video Call section</li>
          <li>Grant camera and microphone permissions</li>
          <li>Select your preferred background or use the default</li>
          <li>Start your high-definition video conversation</li>
        </ol>

        <h2>Use Cases</h2>
        <p>
          StreamShare Video Call is ideal for remote work meetings, virtual
          consultations, online education, technical support sessions, and
          staying in touch with family and friends while maintaining the highest
          standards of data privacy.
        </p>

        <h2>Privacy and Security First</h2>
        <p>
          By utilizing WebRTC technology, StreamShare ensures that your video
          and audio streams are sent directly between you and your peer. We
          don't store, view, or route your calls through any central server,
          providing you with a truly private and secure communication experience.
        </p>
      </div>
    </>
  );
}
