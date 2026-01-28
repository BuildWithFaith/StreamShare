import Head from "next/head";

export default function FileSharingSeo() {
  const webApplicationData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "StreamShare File Sharing",
    description:
      "Secure peer-to-peer file sharing with real-time progress tracking, file previews, and complete transfer control.",
    applicationCategory: "UtilityApplication",
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
      ratingCount: "1287",
    },
    featureList: [
      "Drag and drop file upload",
      "Real-time file preview for images, videos, audio, and documents",
      "Live transfer progress with speed and time estimates",
      "Pause, resume, and cancel file transfers",
      "Secure peer-to-peer connection with encryption",
      "Complete download and upload history",
      "Support for all file types and sizes",
      "No server storage - direct peer connections",
    ],
    screenshot: "https://streamshare.vercel.app/screenshots/file-share.png",
    author: {
      "@type": "Person",
      name: "Muhammad Wahaj",
      url: "https://contra.com/muhammadwahajofficiall_f1yj87dw/services",
    },
  };

  const howToData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Share Files with StreamShare",
    description:
      "Step-by-step guide to sharing files securely using peer-to-peer technology",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Connect with a Peer",
        text: "Share your Peer ID with the person you want to send files to, or enter their Peer ID to connect.",
        url: "https://streamshare.vercel.app",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Navigate to File Sharing",
        text: "Click on the 'Share Files' option in the navigation menu.",
        url: "https://streamshare.vercel.app/sharefiles",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Select or Drag Files",
        text: "Either drag and drop files into the upload area or click to browse and select files from your device.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Monitor Transfer",
        text: "Watch real-time progress with transfer speed, time remaining, and the ability to pause, resume, or cancel at any time.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Complete Transfer",
        text: "Once the transfer is complete, the recipient can download the file directly. All transfers are logged in your history.",
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
        name: "File Sharing",
        item: "https://streamshare.vercel.app/sharefiles",
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
        <h1>Secure Peer-to-Peer File Sharing</h1>
        <p>
          Share files instantly and securely without any server involvement.
          Connect with a peer and send files directly from your browser using
          WebRTC-powered technology with end-to-end encryption.
        </p>

        <h2>Key Features</h2>
        <ul>
          <li>Real-time progress tracking with transfer speed and estimated time remaining</li>
          <li>Drag-and-drop file uploading with support for all file formats and sizes</li>
          <li>In-browser previews for images, videos, audio, PDFs, and text files</li>
          <li>Pause, resume, and cancel transfers with full control</li>
          <li>Access and manage your complete file sharing history</li>
          <li>100% peer-to-peer with no files ever stored on a server</li>
          <li>Secure encrypted connections for maximum privacy</li>
          <li>No file size limits - share files of any size</li>
        </ul>

        <h2>How to Share Files</h2>
        <ol>
          <li>Connect with a peer by sharing your unique Peer ID</li>
          <li>Navigate to the File Sharing section</li>
          <li>Drag and drop files or click to browse and select</li>
          <li>Monitor real-time transfer progress</li>
          <li>Complete the transfer - files go directly to the recipient</li>
        </ol>

        <h2>Perfect For</h2>
        <p>
          StreamShare file sharing is perfect for developers, freelancers,
          educators, students, remote teams, and anyone who needs a fast,
          secure, and private way to share files without relying on cloud
          storage or email attachments.
        </p>

        <h2>Why Choose Peer-to-Peer File Sharing?</h2>
        <p>
          Unlike traditional file sharing services that upload your files to
          servers, StreamShare uses direct peer-to-peer connections. This means
          your files never touch our servers, ensuring complete privacy and
          faster transfer speeds. No storage limits, no waiting for uploads and
          downloads - just instant, direct file transfers.
        </p>
      </div>
    </>
  );
}
