import Head from "next/head";

export default function AppSeo() {
  const webApplicationData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "StreamShare",
    description:
      "A modern peer-to-peer platform for real-time file sharing and video calls with end-to-end encryption.",
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
      ratingValue: "4.9",
      ratingCount: "2300",
    },
    featureList: [
      "Peer-to-peer file sharing",
      "File previews for images, videos, audio, and documents",
      "HD video calls with virtual backgrounds",
      "Secure end-to-end encryption",
      "Drag & drop file upload",
      "Pause, resume, and cancel file transfers",
      "AI-powered virtual background replacement",
      "Screen sharing capabilities",
      "Real-time progress tracking",
      "No server storage - direct peer connections",
    ],
    screenshot: "https://streamshare.vercel.app/screenshots/streamlet-app.png",
    author: {
      "@type": "Person",
      name: "Muhammad Wahaj",
      url: "https://contra.com/muhammadwahajofficiall_f1yj87dw/services",
    },
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "StreamShare",
    url: "https://streamshare.vercel.app",
    logo: "https://streamshare.vercel.app/logo.png",
    description:
      "Providing secure peer-to-peer communication solutions for file sharing and video calling.",
    founder: {
      "@type": "Person",
      name: "Muhammad Wahaj",
      url: "https://contra.com/muhammadwahajofficiall_f1yj87dw/services",
    },
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is StreamShare free to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, StreamShare is completely free to use. There are no hidden fees, subscriptions, or premium tiers. All features including file sharing and video calling are available to everyone at no cost.",
        },
      },
      {
        "@type": "Question",
        name: "How secure is StreamShare?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "StreamShare uses peer-to-peer WebRTC technology with end-to-end encryption. Your files and video calls are transmitted directly between peers without passing through our servers, ensuring maximum privacy and security.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to download any software?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No downloads required! StreamShare works entirely in your web browser. Just visit the website, connect with a peer using their ID, and start sharing files or making video calls instantly.",
        },
      },
      {
        "@type": "Question",
        name: "What file types can I share?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can share any file type through StreamShare - documents, images, videos, audio files, archives, and more. There are no restrictions on file formats, and you can preview many common file types directly in the browser.",
        },
      },
      {
        "@type": "Question",
        name: "How do I connect with someone?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Each user gets a unique Peer ID when they visit StreamShare. Simply share your Peer ID with the person you want to connect with (via text, QR code, or any messaging app), and they can enter it to establish a direct connection.",
        },
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
    ],
  };

  return (
    <>
      <Head>
        {/* WebApplication structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webApplicationData),
          }}
        />
        {/* Organization structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
        />
        {/* FAQ structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        />
        {/* Breadcrumb structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
        />
      </Head>

      <div className="sr-only" aria-hidden="false">
        <h1>StreamShare — Peer-to-Peer File Sharing & Video Calling</h1>
        <p>
          StreamShare is your all-in-one peer-to-peer platform for instant,
          private file sharing and high-quality video communication. Whether you
          need to send a file or start a video call, StreamShare delivers —
          fast, secure, and server-free.
        </p>

        <h2>Secure Peer-to-Peer File Sharing</h2>
        <p>
          Share files instantly and securely without any server involvement.
          Connect with a peer and send files directly from your browser using
          WebRTC-powered technology.
        </p>
        <p>Key features include:</p>
        <ul>
          <li>Real-time progress tracking and estimated time remaining</li>
          <li>Drag-and-drop file uploading with support for all formats</li>
          <li>In-browser previews for images, videos, audio, and text files</li>
          <li>Pause, resume, and cancel transfers with full control</li>
          <li>Access and manage your file sharing history</li>
          <li>100% peer-to-peer with no files ever stored on a server</li>
        </ul>
        <p>
          Perfect for developers, freelancers, educators, and remote teams who
          need a fast and secure way to share files without hassle.
        </p>

        <h2>Professional Video Conference Solution</h2>
        <p>
          Connect with anyone, anywhere with our high-quality video conferencing
          platform. No downloads required — just share your unique link and
          start talking face-to-face instantly.
        </p>
        <p>Our advanced features include:</p>
        <ul>
          <li>Virtual background replacement with AI technology</li>
          <li>One-click screen sharing for presentations</li>
          <li>Multiple camera support for better angles</li>
          <li>Crystal-clear HD audio with noise cancellation</li>
          <li>Secure peer-to-peer connections with encryption</li>
          <li>Works on all devices — desktop, tablet, and mobile</li>
        </ul>
        <p>
          Perfect for remote work, virtual meetings, online education,
          healthcare consultations, and staying connected with friends and
          family.
        </p>

        <h2>Why Choose StreamShare?</h2>
        <p>
          One platform. Two powerful tools. No sign-ups, no installations, no
          server uploads. Just instant sharing and communication — right from
          your browser with complete privacy and security.
        </p>

        <h3>Frequently Asked Questions</h3>
        <dl>
          <dt>Is StreamShare free to use?</dt>
          <dd>
            Yes, StreamShare is completely free with all features available at
            no cost.
          </dd>

          <dt>How secure is StreamShare?</dt>
          <dd>
            StreamShare uses peer-to-peer WebRTC with end-to-end encryption for
            maximum security.
          </dd>

          <dt>Do I need to download any software?</dt>
          <dd>
            No downloads required! StreamShare works entirely in your web
            browser.
          </dd>

          <dt>What file types can I share?</dt>
          <dd>
            You can share any file type with no restrictions on formats.
          </dd>

          <dt>How do I connect with someone?</dt>
          <dd>
            Share your unique Peer ID with others, and they can enter it to
            connect directly.
          </dd>
        </dl>
      </div>
    </>
  );
}