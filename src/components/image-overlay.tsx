import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ImageOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

export function ImageOverlay({ isOpen, onClose, imageSrc, imageAlt }: ImageOverlayProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative max-w-[90vw] max-h-[90vh] overflow-hidden rounded-lg shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {imageSrc.endsWith('.mp4') ? (
              <video
                src={imageSrc}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain"
              />
            ) : (
              <img src={imageSrc} alt={imageAlt} className="w-full h-full object-contain" />
            )}
            <button
              onClick={onClose}
              className="absolute top-2 right-2 p-1 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <X size={20} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
