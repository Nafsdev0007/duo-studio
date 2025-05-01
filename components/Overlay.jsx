const Overlay = ({ index }) => {
  // Define an array of content
  const contentArray = [
    <div className="marque">
      <div>
        Work Work Work Work Work Work Work Work Work Work Work Work Work Work
        Work Work Work Work Work Work Work Work Work{" "}
      </div>
      <div>
        Work Work Work Work Work Work Work Work Work Work Work Work Work Work
        Work Work Work Work Work Work Work Work Work{" "}
      </div>
      <div>
        Work Work Work Work Work Work Work Work Work Work Work Work Work Work
        Work Work Work Work Work Work Work Work Work{" "}
      </div>
    </div>,
    <div className="marque">
      {" "}
      <div>
        Services Services Services Services Services Services Services Services
        Services Services Services Services Services Services Services Services
        Services Services Services Services Services Services Services{" "}
      </div>
      <div>
        Services Services Services Services Services Services Services Services
        Services Services Services Services Services Services Services Services
        Services Services Services Services Services Services Services{" "}
      </div>
      <div>
        Services Services Services Services Services Services Services Services
        Services Services Services Services Services Services Services Services
        Services Services Services Services Services Services Services{" "}
      </div>
    </div>,
    <div className="marque">
      {" "}
      <div>
        Studio Studio Studio Studio Studio Studio Studio Studio Studio Studio
        Studio Studio Studio Studio Studio Studio Studio Studio Studio Studio
        Studio Studio Studio{" "}
      </div>
      <div>
        Studio Studio Studio Studio Studio Studio Studio Studio Studio Studio
        Studio Studio Studio Studio Studio Studio Studio Studio Studio Studio
        Studio Studio Studio{" "}
      </div>
      <div>
        Studio Studio Studio Studio Studio Studio Studio Studio Studio Studio
        Studio Studio Studio Studio Studio Studio Studio Studio Studio Studio
        Studio Studio Studio{" "}
      </div>
    </div>,
    <div className="marque">
      {" "}
      <div>
        Journal Journal Journal Journal Journal Journal Journal Journal Journal
        Journal Journal Journal Journal Journal Journal Journal Journal Journal
        Journal Journal Journal Journal Journal{" "}
      </div>
      <div>
        Journal Journal Journal Journal Journal Journal Journal Journal Journal
        Journal Journal Journal Journal Journal Journal Journal Journal Journal
        Journal Journal Journal Journal Journal{" "}
      </div>
      <div>
        Journal Journal Journal Journal Journal Journal Journal Journal Journal
        Journal Journal Journal Journal Journal Journal Journal Journal Journal
        Journal Journal Journal Journal Journal{" "}
      </div>
    </div>,
    <div className="marque">
      {" "}
      <div>
        Contact Contact Contact Contact Contact Contact Contact Contact Contact
        Contact Contact Contact Contact Contact Contact Contact Contact Contact
        Contact Contact Contact Contact Contact{" "}
      </div>
      <div>
        Contact Contact Contact Contact Contact Contact Contact Contact Contact
        Contact Contact Contact Contact Contact Contact Contact Contact Contact
        Contact Contact Contact Contact Contact{" "}
      </div>
      <div>
        Contact Contact Contact Contact Contact Contact Contact Contact Contact
        Contact Contact Contact Contact Contact Contact Contact Contact Contact
        Contact Contact Contact Contact Contact{" "}
      </div>
    </div>,
  ];

  // Use the index to get the corresponding content
  const content = contentArray[index] || (
    <div className="text-white">Default Content</div>
  );

  return (
    <div className="fixed mark-pr top-0 left-0 w-full z-[10000] h-full bg-[#CCA5DB] flex justify-center items-center">
      {content}
    </div>
  );
};

export default Overlay;
