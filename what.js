window.onload = () => {
  // Only try to modify j3ker element if it exists
  window.scrollTo(0, 0);
  const element = document.getElementById('j3ker');
  if (element) {
    element.style.opacity = 0;
    element.style.transition = 'opacity 0.5s ease-in-out';

    setTimeout(() => {
      element.style.opacity = 1;
    }, 10);
  }

  // Fix for the hidden class when CSS is loaded after our JS
  const scanModal = document.getElementById('scanModal');
  if (scanModal) {
    if (!scanModal.classList.contains('hidden')) {
      scanModal.style.display = 'none';
    }
  }

  // Add styles for text animations and modal overlays
  const style = document.createElement('style');
  style.textContent = `
    #j3ktextContainer {
      transition: opacity 0.8s ease, transform 0.8s ease;
    }
    .translate-y-negative {
      transform: translateY(-20px);
    }
    .translate-y-0 {
      transform: translateY(0);
    }

    /* Add modal overlay styles */
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.7);
      backdrop-filter: blur(10px);
      z-index: 40;
      display: none;
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
    }
  `;
  document.head.appendChild(style);

  // Create modal overlay element if it doesn't exist
  if (!document.getElementById('modalOverlay')) {
    const overlay = document.createElement('div');
    overlay.id = 'modalOverlay';
    overlay.className = 'modal-overlay';
    document.body.appendChild(overlay);
  }
};

// Scan variables
let progress = 0;
let progressInterval;
let scanItems = [
  "RUNNING BAND FOR BAND EMULATOR",
  "CALCULATING HIMOTHY SCORE",
  "PROCESSING SOLANA BALANCE",
  "ANALYZING CRASHOUT POTENTIAL",
  "DETECTING CHIEF KEEF KNOWLEDGE",
  "SCANNING SPOTIFY PLAYLIST AUTHENTICITY"
];

const texts = [
  "AI-Native Quantum-Resistant Cryptography™",
  "0 Second Block Times™",
  "Proof of J3k Entry Scan System™",
  "Broke J3k Detection Software™",
  "A J3k-To-J3k Electronic Cash System™",
  "1 Chigaillion Transaction Speeds™",
  "Patented Anti-Crashout Cybernetic Technology™",
  "AI-Native Quantum-Resistant Cryptography™",
  "Auto-Opps Honeypots Prevention Protocol™",
  "Thermodynamic Bag Chaser 1 Gorillion TPS Technology™"
];

function getRandomScanTime() {
  return Math.random() * (15 - 5) + 5;
}

// Function to set random text
function setRandomText() {
  let textContainer = document.getElementById("j3ktextContainer");
  let textElement = document.getElementById("j3ktext");

  // Skip animation if elements don't exist
  if (!textContainer || !textElement) return;

  // First fade out the text upward
  textContainer.classList.add("opacity-0");
  textContainer.classList.add("transform");
  textContainer.classList.add("translate-y-negative"); // Move up when fading out

  setTimeout(() => {
    // Change the text while it's invisible
    textElement.innerText = texts[Math.floor(Math.random() * texts.length)];

    // Then fade in the text downward
    textContainer.classList.remove("opacity-0");
    textContainer.classList.remove("translate-y-negative");
    textContainer.classList.add("opacity-100");
    textContainer.classList.add("translate-y-0");
  }, 800);
}

// Only set up the text rotation interval if the container element exists
if (document.getElementById("j3ktextContainer")) {
  setInterval(setRandomText, 5000);
}

// Function to show the modal overlay with fade-in effect
function showModalOverlay() {
  const overlay = document.getElementById('modalOverlay');
  if (overlay) {
    // Disable scrolling on the body
    document.body.style.overflow = 'hidden';

    // Show the overlay with fade-in
    overlay.style.display = 'block';
    setTimeout(() => {
      overlay.style.opacity = '1';
    }, 10);
  }
}

// Function to hide the modal overlay with fade-out effect
function hideModalOverlay() {
  const overlay = document.getElementById('modalOverlay');
  if (overlay) {
    // Fade out
    overlay.style.opacity = '0';

    // Hide after animation completes
    setTimeout(() => {
      overlay.style.display = 'none';
      // Re-enable scrolling
      document.body.style.overflow = '';
    }, 500);
  }
}

// Update letscan to use the overlay
function letscan() {
  const element = document.getElementById('j3ker');
  const element2 = document.getElementById('j3ker2');
  const noticeContainer = document.getElementById('noticeContainer') || document.querySelector('.fixed.inset-0.flex.items-center.justify-center.z-50.p-4');
  const scanModal = document.getElementById('scanModal');

  // Show modal overlay first
  showModalOverlay();

  // Only fade out elements if they exist
  if (element) {
    element.style.transition = 'opacity 0.5s ease-in-out';
    element.style.opacity = 0;
  }

  if (element2) {
    element2.style.transition = 'opacity 0.5s ease-in-out';
    element2.style.opacity = 0;
  }

  // After fade-out, hide the notice and show the scan modal
  setTimeout(() => {
    // Hide initial popup elements if they exist
    if (element) element.style.display = 'none';
    if (element2) element2.style.display = 'none';
    if (noticeContainer) noticeContainer.style.display = 'none';

    // Show the scan modal
    if (scanModal) {
      scanModal.classList.remove('hidden');
      scanModal.style.display = 'flex';  // Ensure it's displayed as flex
      scanModal.style.opacity = '0';
      scanModal.style.transition = 'opacity 0.5s ease-in-out';

      // Play scan audio when scan starts
      const scanAudio = document.getElementById("j3");
      if (scanAudio) {
        scanAudio.currentTime = 0;
        scanAudio.play().catch(e => console.log("Audio play error:", e));
        scanAudio.volume = 0.3;
      }

      // Fade in the scan modal
      setTimeout(() => {
        scanModal.style.opacity = '1';
      }, 10);

      startFakeScan();
    } else {
      console.error("Scan modal not found!");
    }
  }, 500); // Match timeout to transition duration (0.5s = 500ms)
}

function startFakeScan() {
  const progressBar = document.getElementById('progressBar');
  const progressMessage = document.getElementById('progressMessage');
  const scannedItemMessage = document.getElementById('scannedItemMessage');
  const scanModal = document.getElementById('scanModal');

  if (!progressBar || !progressMessage || !scannedItemMessage) {
      console.error("Required scan elements not found");
      return;
  }

  // Reset progress
  progress = 0;
  scannedItemMessage.innerText = 'Initializing scan...';
  progressMessage.innerText = 'Scanning... 0%';
  progressBar.style.width = '0%';
  progressBar.style.transition = 'width 0.5s linear';

  if (progressInterval) clearInterval(progressInterval);

  // Ensure the scan modal is visible
  scanModal.classList.remove('hidden');
  scanModal.style.display = 'flex';

  const randomTime = getRandomScanTime();
  const progressIntervalTime = (randomTime * 1000) / 100;

  progressInterval = setInterval(() => {
      if (progress < 100) {
          progress += 1;
          progressBar.style.width = `${progress}%`;
          progressMessage.innerText = `Scanning... ${progress}%`;

          if (progress % 10 === 0) {
              const randomItem = scanItems[Math.floor(Math.random() * scanItems.length)];
              scannedItemMessage.innerText = `${randomItem}`;
          }
      } else {
          clearInterval(progressInterval);
          progressMessage.innerText = 'Scan Complete!';
          progressBar.style.width = '100%';

          // Stop scan audio
          const scanAudio = document.getElementById("j3");
          if (scanAudio) {
              scanAudio.pause();
              scanAudio.currentTime = 0;
          }

          // Play completion sound
          const completionAudio = document.getElementById("j2");
          if (completionAudio) {
              completionAudio.currentTime = 0;
              completionAudio.play().catch(e => console.log("Audio play error:", e));
              completionAudio.volume = 0.3;
          }

          // Fade-out effect
          setTimeout(() => {
              scanModal.style.opacity = '0';

              setTimeout(() => {
                  scanModal.classList.add('hidden');
                  scanModal.style.display = 'none';
                  scanModal.style.opacity = '1'; // Reset for next time

                  // Hide the modal overlay when scan is complete
                  hideModalOverlay();
              }, 500);
          }, 1500);
      }
  }, progressIntervalTime);
}

// Optional: Keep this if you want a separate hide function elsewhere
function hideNotice() {
  const element = document.getElementById('j3ker');
  const element2 = document.getElementById('j3ker2');
  const noticeContainer = document.getElementById('noticeContainer') || document.querySelector('.fixed.inset-0.flex.items-center.justify-center.z-50.p-4');

  if (element) element.style.display = 'none';
  if (element2) element2.style.display = 'none';
  if (noticeContainer) noticeContainer.style.display = 'none';
}

// Function to close the detection result modal
function closeDetectionResult() {
  const brokeDetectionResult = document.getElementById('brokeDetectionResult');

  if (brokeDetectionResult) {
    brokeDetectionResult.style.opacity = '0';

    setTimeout(() => {
      brokeDetectionResult.style.display = 'none';
      brokeDetectionResult.innerHTML = '';

      // Hide the overlay
      hideModalOverlay();
    }, 600); // Match with transition duration
  }
}

// New function for the Broke J3K Detection with enhanced animations
function runBrokeJ3KDetection() {
  const brokeDetectionResult = document.getElementById('brokeDetectionResult');
  const brokeScanModal = document.getElementById('brokeScanModal');

  // Show the modal overlay first
  showModalOverlay();

  // Show the scan modal with enhanced fade-in effect
  if (brokeScanModal) {
    // First set opacity to 0
    brokeScanModal.style.opacity = '0';
    brokeScanModal.style.transition = 'opacity 0.6s ease-in-out';
    brokeScanModal.classList.remove('hidden');
    brokeScanModal.style.display = 'flex';

    // Then transition to opacity 1
    setTimeout(() => {
      brokeScanModal.style.opacity = '1';
    }, 10);

    // Reset result if it exists
    if (brokeDetectionResult) {
      brokeDetectionResult.innerHTML = '';
      brokeDetectionResult.style.display = 'none';
    }

    // Play scan audio
    const scanAudio = document.getElementById("j3");
    if (scanAudio) {
      scanAudio.currentTime = 0;
      scanAudio.play().catch(e => console.log("Audio play error:", e));
      scanAudio.volume = 0.3;
    }

    // Special scan items for broke detection
    const brokeDetectionItems = [
      "ANALYZING WALLET BALANCE",
      "CHECKING NFT PORTFOLIO",
      "EVALUATING TRADING HISTORY",
      "SCANNING LIQUIDITY POOLS",
      "ANALYZING RISK TOLERANCE",
      "CALCULATING NET WORTH"
    ];

    // Use existing scan logic but with our custom completion
    startBrokeDetectionScan(brokeDetectionItems);
  } else {
    console.error("Broke scan modal not found!");
  }
}

// Function to open the Broke Detection Scan modal with fade-in effect
function openBrokeScanModal() {
  const brokeScanModal = document.getElementById('brokeScanModal');

  // Show modal overlay
  showModalOverlay();

  if (brokeScanModal) {
      brokeScanModal.style.opacity = '0'; // Start hidden
      brokeScanModal.style.transition = 'opacity 0.6s ease-in-out';
      brokeScanModal.classList.remove('hidden'); // Remove hidden class
      brokeScanModal.style.display = 'flex'; // Ensure it's visible

      setTimeout(() => {
          brokeScanModal.style.opacity = '1'; // Fade in effect
      }, 10);
  }
}

// Function with enhanced animation for better user experience
function startBrokeDetectionScan(brokeDetectionItems) {
  const brokeScanModal = document.getElementById('brokeScanModal');
  const progressBrokeBar = document.getElementById('progressBrokeBar');
  const progressBrokeMessage = document.getElementById('progressBrokeMessage');
  const scannedBrokeItemMessage = document.getElementById('scannedBrokeItemMessage');

  if (!brokeScanModal || !progressBrokeBar || !progressBrokeMessage || !scannedBrokeItemMessage) {
      console.error("Required scan elements not found");
      return;
  }

  // Reset progress
  progress = 0;
  scannedBrokeItemMessage.innerText = 'Initializing broke detection scan...';
  progressBrokeMessage.innerText = 'Scanning... 0%';
  progressBrokeBar.style.width = '0%';
  progressBrokeBar.style.transition = 'width 0.5s linear';

  if (progressInterval) clearInterval(progressInterval);

  // Ensure visible
  brokeScanModal.classList.remove('hidden');
  brokeScanModal.style.display = 'flex';
  brokeScanModal.style.opacity = '1';

  const randomTime = getRandomScanTime();
  const progressIntervalTime = (randomTime * 1000) / 100;

  progressInterval = setInterval(() => {
      if (progress < 100) {
          progress += 1;
          progressBrokeBar.style.width = `${progress}%`;
          progressBrokeMessage.innerText = `Scanning... ${progress}%`;
          // Ensure text color stays red
          progressBrokeMessage.classList.add('text-red-400');

          if (progress % 10 === 0) {
              const randomItem = brokeDetectionItems[Math.floor(Math.random() * brokeDetectionItems.length)];
              scannedBrokeItemMessage.innerText = `${randomItem}`;
          }
      } else {
          clearInterval(progressInterval);
          progressBrokeMessage.innerText = 'Broke Detection Complete!';
          progressBrokeMessage.classList.add('text-red-400'); // Ensure final text is also red
          progressBrokeBar.style.width = '100%';

          // Play completion sound
          const dongSound = document.getElementById("dong");
          if (dongSound) {
              dongSound.currentTime = 0;
              dongSound.play().catch(e => console.log("Audio play error:", e));
              dongSound.volume = 0.5;
          }

          // Make sure to close the broke scan modal and show results after a delay
          setTimeout(() => {
              closeBrokeScanModal();
              setTimeout(() => {
                  showBrokeDetectionResult();
              }, 500);
          }, 1000);
      }
  }, progressIntervalTime);
}

// Function to close the Broke Detection Scan modal with smoother animation
function closeBrokeScanModal() {
  const brokeScanModal = document.getElementById('brokeScanModal');

  if (brokeScanModal) {
      brokeScanModal.style.opacity = '0';

      setTimeout(() => {
          brokeScanModal.classList.add('hidden');
          brokeScanModal.style.display = 'none';

          // Hide the overlay
          hideModalOverlay();
      }, 600); // Match this with the transition duration
  }
}

// Function to show the broke detection result with enhanced animations
function showBrokeDetectionResult() {
  const brokeDetectionResult = document.getElementById('brokeDetectionResult');

  if (brokeDetectionResult) {
    // Show the overlay
    showModalOverlay();

    // Hide previous results before displaying a new one
    brokeDetectionResult.style.display = 'none';
    brokeDetectionResult.innerHTML = ""; // Clear previous content

    // First, set opacity to 0 and make it visible
    brokeDetectionResult.style.opacity = '0';
    brokeDetectionResult.style.display = 'flex';
    brokeDetectionResult.style.transition = 'opacity 0.8s ease-in-out';

    // Randomly determine if the user is broke (50/50 chance)
    const isBroke = Math.random() < 0.5;

    // Apply the correct content
    brokeDetectionResult.innerHTML = isBroke ? `
      <div class="bg-black/90 backdrop-blur-lg border-2 border-red-500 rounded-xl p-8 text-center max-w-3xl mx-auto relative">
        <button onclick="closeDetectionResult()" class="absolute top-4 right-4 text-red-400 hover:text-red-200 transition-colors">
          ✖
        </button>
        <h2 class="text-3xl font-bold text-red-400">BROKE J3K DETECTED</h2>
        <p class="text-lg text-white/80 mt-4">Our AI has detected that you are a broke J3K.</p>
        <button onclick="closeDetectionResult()" class="mt-6 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
          CLOSE
        </button>
      </div>
    ` : `
      <div class="bg-black/90 backdrop-blur-lg border-2 border-green-500 rounded-xl p-8 text-center max-w-3xl mx-auto relative">
        <button onclick="closeDetectionResult()" class="absolute top-4 right-4 text-green-400 hover:text-green-200 transition-colors">
          ✖
        </button>
        <h2 class="text-3xl font-bold text-green-400">CERTIFIED J3K</h2>
        <p class="text-lg text-white/80 mt-4">Congratulations! Our AI confirms you are not broke.</p>
        <button onclick="closeDetectionResult()" class="mt-6 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
          CLOSE
        </button>
      </div>
    `;

    // Enhanced smooth fade-in effect
    setTimeout(() => {
      brokeDetectionResult.style.opacity = '1';
    }, 50);
  } else {
    console.error("brokeDetectionResult element not found!");
  }
}

// Add functionality for how-to-buy buttons
document.addEventListener('DOMContentLoaded', function() {
  // HTML content for Moonshot and Solana sections
  const moonshotContent = `
            <div class="rounded-lg border border-red-400/20 p-6 backdrop-blur-sm font-space">
                <h3 class="text-xl font-bold text-red-400 mb-4">How to buy with Moonshot</h3>
                <div class="space-y-6">
                    <div class="flex flex-col sm:flex-row items-start gap-4">
                        <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-red-400/20 text-red-400 font-bold text-lg">1</div>
                        <div>
                            <h4 class="text-lg font-bold text-white/90">Download Moonshot</h4>
                            <p class="text-white/80">Get Moonshot - the easiest way to buy tokens on Solana. Available on iOS and Android.</p>
                            <div class="flex gap-3 mt-2">
                                <a href="https://files.catbox.moe/himbdy.mp4" target="_blank" class="px-4 py-2 bg-black/50 border border-red-400/30 rounded-lg text-white/90 text-sm hover:bg-red-400/20 transition-colors">iOS App Store</a>
                                <a href="https://files.catbox.moe/himbdy.mp4" target="_blank" class="px-4 py-2 bg-red-500/10 text-red-400 rounded-lg text-sm hover:bg-red-500/20 transition-colors">Link</a>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col sm:flex-row items-start gap-4">
                        <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-red-400/20 text-red-400 font-bold text-lg">2</div>
                        <div>
                            <h4 class="text-lg font-bold text-white/90">Fund Your Account</h4>
                            <p class="text-white/80">In Moonshot, you can buy directly with a credit/debit card or transfer crypto from another wallet.</p>
                            <div class="mt-2 py-2 px-3 rounded-lg bg-red-500/10 border border-red-400/20">
                                <p class="text-red-400 text-sm flex items-center">
                                    <span class="mr-2">⦿</span> Moonshot makes it simple - no complicated wallets or exchanges needed!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col sm:flex-row items-start gap-4">
                        <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-red-400/20 text-red-400 font-bold text-lg">3</div>
                        <div>
                            <h4 class="text-lg font-bold text-white/90">Buy J3KChain Token</h4>
                            <p class="text-white/80">Search for "J3K" or paste the contract address, enter the amount you want to buy, and confirm your purchase.</p>
                            <div class="mt-2 py-2 px-3 rounded-lg bg-black/30 border border-red-400/20">
                                <p class="text-red-400 text-sm font-mono break-all">
                                    Contract Address: 3t4yhNHfy5jZ9chinanumberoneJw9ZMRHvLJw1WUPouJ4TSxatTpump
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col sm:flex-row items-start gap-4">
                        <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-red-400/20 text-red-400 font-bold text-lg">4</div>
                        <div>
                            <h4 class="text-lg font-bold text-white/90">Let the bread grow</h4>
                            <p class="text-white/80">Congratulations! You're no longer a broke J3K. Hold your J3K tokens and watch your bread grow thanks to our revolutionary AI Layer 2 technology.</p>
                            <div class="mt-2 py-2 px-3 rounded-lg bg-green-900/20 border border-green-400/20">
                                <p class="text-green-400 text-sm flex items-center">
                                    <span class="mr-2">⦿</span> Always do your own research and invest responsibly. J3Kchain is purely satirical, it does not have any speculative value (yet).
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        const solanaContent = `
            <div class="rounded-lg border border-red-400/20 p-6 backdrop-blur-sm font-space">
                <h3 class="text-xl font-bold text-red-400 mb-4">How to buy with Solana</h3>
                <div class="space-y-6">
                    <div class="flex flex-col sm:flex-row items-start gap-4">
                        <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-red-400/20 text-red-400 font-bold text-lg">1</div>
                        <div>
                            <h4 class="text-lg font-bold text-white/90">Get a Solana Wallet</h4>
                            <p class="text-white/80">Download a Solana-compatible wallet. We recommend Phantom or Solflare for desktop or mobile.</p>
                            <div class="flex gap-3 mt-2">
                                <a href="https://files.catbox.moe/himbdy.mp4" target="_blank" class="px-4 py-2 bg-black/50 border border-red-400/30 rounded-lg text-white/90 text-sm hover:bg-red-400/20 transition-colors">Phantom</a>
                                <a href="https://files.catbox.moe/himbdy.mp4" target="_blank" class="px-4 py-2 bg-black/50 border border-red-400/30 rounded-lg text-white/90 text-sm hover:bg-red-400/20 transition-colors">Solflare</a>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col sm:flex-row items-start gap-4">
                        <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-red-400/20 text-red-400 font-bold text-lg">2</div>
                        <div>
                            <h4 class="text-lg font-bold text-white/90">Get SOL</h4>
                            <p class="text-white/80">Fund your wallet with SOL from exchanges like Coinbase or Binance, then send it to your wallet address.</p>
                            <div class="flex gap-3 mt-2">
                                <a href="https://files.catbox.moe/himbdy.mp4" target="_blank" class="px-4 py-2 bg-black/50 border border-red-400/30 rounded-lg text-white/90 text-sm hover:bg-red-400/20 transition-colors">Coinbase</a>
                                <a href="https://files.catbox.moe/himbdy.mp4" target="_blank" class="px-4 py-2 bg-black/50 border border-red-400/30 rounded-lg text-white/90 text-sm hover:bg-red-400/20 transition-colors">Binance</a>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col sm:flex-row items-start gap-4">
                        <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-red-400/20 text-red-400 font-bold text-lg">3</div>
                        <div>
                            <h4 class="text-lg font-bold text-white/90">Swap on Jupiter</h4>
                            <p class="text-white/80">Click on the "Jupiter" link on this website, connect your wallet, and swap for SOL or any other token of your choosing.</p>
                            <div class="mt-2 flex flex-col gap-2">
                                <div class="py-2 px-3 rounded-lg bg-black/30 border border-red-400/20">
                                    <p class="text-red-400 text-sm font-mono break-all">
                                        Contract Address: 3t4yhNHfy5jZ9chinanumberoneJw9ZMRHvLJw1WUPouJ4TSxatTpump
                                    </p>
                                </div>
                                <a href="https://files.catbox.moe/himbdy.mp4" target="_blank" class="px-4 py-2 bg-cyan-500/80 text-white rounded-lg text-sm hover:bg-cyan-600 transition-colors w-fit">Jupiter Swap</a>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col sm:flex-row items-start gap-4">
                        <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-red-400/20 text-red-400 font-bold text-lg">4</div>
                        <div>
                            <h4 class="text-lg font-bold text-white/90">Let the bread grow</h4>
                            <p class="text-white/80">Congratulations! You're no longer a broke J3K. Hold your J3K tokens and watch them grow thanks to our revolutionary AI Layer 2 technology.</p>
                            <div class="mt-2 py-2 px-3 rounded-lg bg-green-900/20 border border-green-400/20">
                                <p class="text-green-400 text-sm flex items-center">
                                    <span class="mr-2">⦿</span> Always do your own research and invest responsibly. J3Kchain is purely satirical, it does not have any speculative value (yet).
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

  // First try the ID-based approach (new HTML structure)
  const moonShotBtn = document.getElementById('moonShotBtn');
  const solanaBtn = document.getElementById('solanaBtn');
  const contentDiv = document.getElementById('how-to-buy-content');

  // Function to set active button style for either implementation
  function setActiveButton(activeBtn, inactiveBtn) {
    // Active button style
    activeBtn.classList.remove('bg-transparent', 'text-red-400', 'border-red-400/30');
    activeBtn.classList.add('bg-red-400', 'text-white', 'border-red-400');

    // Inactive button style
    inactiveBtn.classList.remove('bg-red-400', 'text-white', 'border-red-400');
    inactiveBtn.classList.add('bg-transparent', 'text-red-400', 'border-red-400/30');
  }

  // Function to set up button functionality that can be reused for both implementations
  function setupButtonEventListeners(containerDiv) {
    // Helper function to open URL in new tab
    function openUrl(url) {
      window.open(url, '_blank');
    }

    // Button handlers for all buttons in the content
    const buttons = containerDiv.querySelectorAll('button');

    buttons.forEach(button => {
      // Remove existing listeners first to prevent duplicates
      const newButton = button.cloneNode(true);
      button.parentNode.replaceChild(newButton, button);

      // Add appropriate listeners based on button text
      const buttonText = newButton.innerText.trim().toLowerCase();

      if (buttonText.includes('ios app store')) {
        newButton.addEventListener('click', () => openUrl('https://apps.apple.com/us/app/moonshot-simple-crypto/id1589072790'));
      }
      else if (buttonText.includes('link')) {
        newButton.addEventListener('click', () => openUrl('https://moonshot.money/Y74Kuhy1963vpRoeuJEsLDRG?ref=X8nywtVks6'));
      }
      else if (buttonText.includes('phantom')) {
        newButton.addEventListener('click', () => openUrl('https://phantom.app/download'));
      }
      else if (buttonText.includes('solflare')) {
        newButton.addEventListener('click', () => openUrl('https://solflare.com/download'));
      }
      else if (buttonText.includes('coinbase')) {
        newButton.addEventListener('click', () => openUrl('https://www.coinbase.com/'));
      }
      else if (buttonText.includes('binance')) {
        newButton.addEventListener('click', () => openUrl('https://www.binance.com/'));
      }
      else if (buttonText.includes('jupiter swap')) {
        newButton.addEventListener('click', () => openUrl('https://jup.ag/swap/SOL-J3K'));
      }
      else if (buttonText.includes('close')) {
        newButton.addEventListener('click', closeDetectionResult);
      }

      // Add hover effect to all buttons
      newButton.addEventListener('mouseenter', () => {
        newButton.style.transform = 'translateY(-2px)';
        newButton.style.transition = 'all 0.3s ease';
      });

      newButton.addEventListener('mouseleave', () => {
        newButton.style.transform = 'translateY(0)';
      });
    });

    // Make contract addresses clickable to copy
    const contractAddresses = containerDiv.querySelectorAll('.text-red-400.text-sm.font-mono');
    contractAddresses.forEach(address => {
      // Style to indicate it's clickable
      address.style.cursor = 'pointer';

      // Remove existing listeners
      const newAddress = address.cloneNode(true);
      address.parentNode.replaceChild(newAddress, address);

      // Add click to copy functionality
      newAddress.addEventListener('click', function() {
        const text = this.innerText.split(': ')[1].trim();
        navigator.clipboard.writeText(text)
          .then(() => {
            // Show a copied notification
            const notification = document.createElement('div');
            notification.textContent = 'Contract address copied! 📋';
            notification.style.position = 'fixed';
            notification.style.bottom = '20px';
            notification.style.left = '50%';
            notification.style.transform = 'translateX(-50%)';
            notification.style.padding = '10px 20px';
            notification.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            notification.style.color = '#ffffff';
            notification.style.borderRadius = '5px';
            notification.style.zIndex = '1000';
            document.body.appendChild(notification);

            // Remove after 2 seconds
            setTimeout(() => {
              notification.style.opacity = '0';
              notification.style.transition = 'opacity 0.5s ease';
              setTimeout(() => document.body.removeChild(notification), 500);
            }, 2000);
          })
          .catch(err => {
            console.error('Failed to copy text: ', err);
          });
      });
    });
  }

  // Check if ID-based elements exist
  if (moonShotBtn && solanaBtn && contentDiv) {
    console.log("Using ID-based selectors for how-to-buy section");

    // Show Moonshot content by default and set it as active
    contentDiv.innerHTML = moonShotContent;
    setActiveButton(moonShotBtn, solanaBtn);

    // Add event listeners to the buttons in the Moonshot content
    setupButtonEventListeners(contentDiv);

    // Add click event for Moonshot button
    moonShotBtn.addEventListener('click', function() {
      contentDiv.innerHTML = moonShotContent;
      setActiveButton(moonShotBtn, solanaBtn);
      setupButtonEventListeners(contentDiv);
    });

    // Add click event for Solana button
    solanaBtn.addEventListener('click', function() {
      contentDiv.innerHTML = solanaContent;
      setActiveButton(solanaBtn, moonShotBtn);
      setupButtonEventListeners(contentDiv);
    });
  }
  // If ID-based elements don't exist, try class-based selectors (old HTML structure)
  else {
    const oldMoonShotBtn = document.querySelector('.font-space button:nth-child(1)');
    const oldSolanaBtn = document.querySelector('.font-space button:nth-child(2)');
    const oldContentDiv = document.querySelector('.space-y-6.font-space:empty');

    if (oldMoonShotBtn && oldSolanaBtn && oldContentDiv) {
      console.log("Using class-based selectors for how-to-buy section");

      // Show Moonshot content by default and set it as active
      oldContentDiv.innerHTML = moonShotContent;
      setActiveButton(oldMoonShotBtn, oldSolanaBtn);

      // Add event listeners to the buttons in the Moonshot content
      setupButtonEventListeners(oldContentDiv);

      // Add click event for Moonshot button
      oldMoonShotBtn.addEventListener('click', function() {
        oldContentDiv.innerHTML = moonShotContent;
        setActiveButton(oldMoonShotBtn, oldSolanaBtn);
        setupButtonEventListeners(oldContentDiv);
      });

      // Add click event for Solana button
      oldSolanaBtn.addEventListener('click', function() {
        oldContentDiv.innerHTML = solanaContent;
        setActiveButton(oldSolanaBtn, oldMoonShotBtn);
        setupButtonEventListeners(oldContentDiv);
      });
    } else {
      console.error("Could not find how-to-buy button elements with either ID or class selectors");
    }
  }
});
