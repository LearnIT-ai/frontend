import { useState, useRef } from "react";

import Breadcrumbs from "../../components/ui/Breadcrumbs";
import SectionHeading from "../../components/ui/SectionHeading";
import SectionDescription from "../../components/ui/SectionDescription";
import Button from "../../components/ui/Button";
import ChatButton from "../../components/ui/chat_ui/ChatButton";
import { useNavigate } from "react-router-dom";

export default function UploadFile() {
  const [document, setDocument] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  function triggerInput() {
    if (!inputRef || !inputRef.current) return;
    inputRef.current.click();
  }

  function selectDocument(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      setDocument(e.target.files[0]);
    }
  }

  function deleteDocument() {
    setDocument(null);
  }

  function previewDocument() {
    if (document === null) {
      alert("Please, select a file!");
    } else {
      const documentUrl = URL.createObjectURL(document);
      localStorage.setItem(
        "selectedFile",
        JSON.stringify({
          name: document.name,
          type: document.type,
          url: documentUrl,
        })
      );
      navigate("/upload-file/preview");
    }
  }

  return (
    <div className="px-[var(--sm-px)] md:px-[var(--md-px)] lg:px-[var(--lg-px)]">
      <div
        className="mt-[40px] w-full flex flex-col 
          text-left items-start"
      >
        <Breadcrumbs />
        <div
          className="courses w-full grid grid-rows-auto grid-cols-1 md:grid-cols-2 
                lg:grid-cols-3 gap-8 md:gap-4 lg:gap-10"
        ></div>
        <section className="w-full flex flex-col items-start">
          <SectionHeading
            params={{
              content: "Upload Files",
            }}
          />
          <SectionDescription
            params={{
              content:
                "Upload your hometask in PDF format and check it correctness with the AI Assistant:",
              alignment: "text-left",
              className: "mb-4",
            }}
          />
          <ul className="flex flex-col gap-2 mb-16">
            <li className="flex gap-4 items-center font-semibold">
              <p className="text-xl">📄</p>
              <p>Select a file</p>
            </li>
            <li className="flex gap-4 items-center">
              <p className="text-xl">🤖</p>
              <p className="text-[var(--input-text-clr)]">
                Preview the document and talk with AI Assistant
              </p>
            </li>
            <li className="flex gap-4 items-center">
              <p className="text-xl">✅</p>
              <p className="text-[var(--input-text-clr)]">
                Submit the document
              </p>
            </li>
          </ul>
          <div
            className="w-full rounded-xl border-2 border-[var(--border-clr)] bg-[var(--navbar-clr)]
                          flex justify-center items-center flex-col p-10 lg:p-20 gap-6"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-cloud-plus w-20 h-20"
                viewBox="0 0 16 16"
              >
                <path d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5" />
                <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
              </svg>
            </div>
            <p className="text-xl font-semibold uppercase w-[60%] text-center">
              Select a file from your device
            </p>
            <p className="text-[var(--input-text-clr)]">Files supported: PDF</p>
            <div className="flex flex-row gap-4">
              <Button
                params={{
                  content: "Upload a file",
                  onClickFunction: triggerInput,
                  className: "btn-primary mt-4",
                }}
              />
              <button
                className={`border-2 text-white font-medium rounded-lg 
                            px-3 md:px-4 py-2 text-center w-fit uppercase text-base mt-4
                            ${
                              document
                                ? "hover:ring-2 hover:ring-blue-300 border-[var(--primary-clr)]"
                                : "border-[var(--border-clr)] text-[var(--input-clr)]"
                            }`}
                onClick={previewDocument}
                type="button"
                disabled={document ? false : true}
              >
                Preview
              </button>
            </div>
            <input
              ref={inputRef}
              id="file"
              type="file"
              hidden
              accept=".pdf"
              onChange={selectDocument}
            />
          </div>
          {document && (
            <div
              className="w-full rounded-xl border-2 border-[var(--border-clr)] bg-[var(--navbar-clr)]
                          flex flex-row p-6 gap-6 mt-6 items-center justify-between"
            >
              <div className="flex flex-row gap-6 items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-file-earmark-pdf-fill w-8 h-8 fill-[var(--yellow-clr)]"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.523 12.424q.21-.124.459-.238a8 8 0 0 1-.45.606c-.28.337-.498.516-.635.572l-.035.012a.3.3 0 0 1-.026-.044c-.056-.11-.054-.216.04-.36.106-.165.319-.354.647-.548m2.455-1.647q-.178.037-.356.078a21 21 0 0 0 .5-1.05 12 12 0 0 0 .51.858q-.326.048-.654.114m2.525.939a4 4 0 0 1-.435-.41q.344.007.612.054c.317.057.466.147.518.209a.1.1 0 0 1 .026.064.44.44 0 0 1-.06.2.3.3 0 0 1-.094.124.1.1 0 0 1-.069.015c-.09-.003-.258-.066-.498-.256M8.278 6.97c-.04.244-.108.524-.2.829a5 5 0 0 1-.089-.346c-.076-.353-.087-.63-.046-.822.038-.177.11-.248.196-.283a.5.5 0 0 1 .145-.04c.013.03.028.092.032.198q.008.183-.038.465z" />
                    <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m5.5 1.5v2a1 1 0 0 0 1 1h2zM4.165 13.668c.09.18.23.343.438.419.207.075.412.04.58-.03.318-.13.635-.436.926-.786.333-.401.683-.927 1.021-1.51a11.7 11.7 0 0 1 1.997-.406c.3.383.61.713.91.95.28.22.603.403.934.417a.86.86 0 0 0 .51-.138c.155-.101.27-.247.354-.416.09-.181.145-.37.138-.563a.84.84 0 0 0-.2-.518c-.226-.27-.596-.4-.96-.465a5.8 5.8 0 0 0-1.335-.05 11 11 0 0 1-.98-1.686c.25-.66.437-1.284.52-1.794.036-.218.055-.426.048-.614a1.24 1.24 0 0 0-.127-.538.7.7 0 0 0-.477-.365c-.202-.043-.41 0-.601.077-.377.15-.576.47-.651.823-.073.34-.04.736.046 1.136.088.406.238.848.43 1.295a20 20 0 0 1-1.062 2.227 7.7 7.7 0 0 0-1.482.645c-.37.22-.699.48-.897.787-.21.326-.275.714-.08 1.103" />
                  </svg>
                </div>
                <div className="flex flex-row gap-2">
                  <p>{document.name}</p>
                  <p className="text-[var(--input-text-clr)]">
                    ({Math.round((document.size / 1000000) * 100) / 100} MB)
                  </p>
                </div>
              </div>
              <ChatButton
                params={{
                  size: 24,
                  onClickFunction: deleteDocument,
                  className: "w-6 lg:w-4 xl:w-6",
                  path: "M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0",
                }}
              />
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
