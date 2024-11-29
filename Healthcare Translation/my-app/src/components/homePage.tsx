import React, { useState, useEffect } from "react";
import { BehaviorSubject, interval } from "rxjs";
import { takeWhile, tap } from "rxjs/operators";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import { MicOff } from "@mui/icons-material";
import MicIcon from "@mui/icons-material/Mic";
import { Tooltip } from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

function HomePage() {
  const [typedOriginalText, setTypedOriginalText] = useState(""); // For typed original text
  const [typedTranslatedText, setTypedTranslatedText] = useState(""); // For typed translated text

  const [micOff, setMicOff] = useState(true);
  const [volumOff, setVolumOff] = useState(true);

  const originalText = "Main keh raha hon kay..!"; // Original Text
  const translatedText = "Im saying that..!"; // Translated Text

  useEffect(() => {
    const originalTextObservable = interval(500).pipe(
      takeWhile((_, index) => index < originalText.split(" ").length),
      tap((index) => {
        return index;
      })
    );

    const translatedTextObservable = interval(500).pipe(
      takeWhile((_, index) => index < translatedText.split(" ").length),
      tap((index) => {
        const words = translatedText.split(" ");
        setTypedTranslatedText((prev) => {
          // Prevent appending if the word has already been added
          return prev + (prev && index > 0 ? " " : "") + words[index];
        });
      })
    );

    // Start typing effect for both original and translated texts
    const originalSubscription = originalTextObservable.subscribe({
      next(index) {
        const words = originalText.split(" ");
        setTypedOriginalText((prev) => {
          // Prevent appending if the word has already been added
          return prev + (prev && index > 0 ? " " : "") + words[index];
        });
      },
    });
    const translatedSubscription = translatedTextObservable.subscribe();
    // Cleanup subscriptions on component unmount or when texts change
    return () => {
      if (!originalSubscription.closed) {
        originalSubscription.unsubscribe();
      }
      if (!translatedSubscription.closed) {
        translatedSubscription.unsubscribe();
      }
    };
  }, [originalText, translatedText]); // Effect runs only when texts change

  // Toggle mic state
  const handleMicClick = () => {
    setMicOff(!micOff);
  };

  const handleVolClick = () => {
    setVolumOff(!volumOff);
  };
  return (
    <>
      <header className="flex items-center font-bold text-4xl text-blue-400 text-center bg-blue-50 p-5 justify-center">
        <LocalHospitalIcon sx={{ fontSize: "2.25rem", mt: 1, mr: 3 }} />
        Healthcare Translation
      </header>

      <main className="flex justify-center items-center bg-blue-100 min-h-[100vh]">
        <section className="text-center flex flex-col justify-between h-full w-full px-4">
          {/* Original and Translated Text Containers */}
          <div className="flex space-x-8 mb-10 flex-grow w-full">
            <div className="flex flex-col w-full md:w-[48%] border rounded-3xl bg-blue-200 min-h-[500px] text-lg font-medium p-4">
              <h1 className="text-blue-700 font-bold">Original Text</h1>
              <p className="text-black">{typedOriginalText}</p>
            </div>
            <div className="relative flex flex-col w-full md:w-[48%] border rounded-3xl bg-blue-200 min-h-[500px] text-lg font-medium p-4">
              <h1 className="text-blue-700 font-bold">Translated Text</h1>
              <p className="text-black">{typedTranslatedText}</p>

              {/* Mic Icon at Bottom Right of Translated Text Container */}
              <Tooltip
                title={volumOff ? "Click to start speaking" : "Listening..."}
                arrow
              >
                {volumOff ? (
                  <VolumeOffIcon
                    sx={{
                      fontSize: "4rem",
                      cursor: "pointer",
                      position: "absolute",
                      bottom: "10px",
                      right: "10px",
                    }}
                    onClick={handleVolClick}
                  />
                ) : (
                  <VolumeUpIcon
                    sx={{
                      fontSize: "4rem",
                      cursor: "pointer",
                      position: "absolute",
                      bottom: "10px",
                      right: "10px",
                    }}
                    onClick={handleVolClick}
                  />
                )}
              </Tooltip>
            </div>
          </div>

          {/* Mic Icon and Text */}
          <div className="mt-10">
            <Tooltip
              title={micOff ? "Click to start speaking" : "Listening..."}
              arrow
            >
              {micOff ? (
                <MicOff
                  sx={{ fontSize: "10rem", cursor: "pointer" }}
                  onClick={handleMicClick}
                />
              ) : (
                <MicIcon
                  sx={{ fontSize: "10rem", cursor: "pointer" }}
                  onClick={handleMicClick}
                />
              )}
            </Tooltip>
            <p className="mt-4 text-xl text-blue-600">
              {micOff ? "Tap to start speaking" : "Listening..."}
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default HomePage;
