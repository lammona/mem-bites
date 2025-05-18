
import styles from "./modal.module.css"

interface ModalProps {
  onClose: () => void;
  onSubmit: (value: string) => void;
  value: string;
  setValue: (value: string) => void;
}

export default function Modal({
  onClose,
  onSubmit,
  value,
  setValue,
}: ModalProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <h3>Create your own fact</h3>
        <form onSubmit={handleSubmit}>
          <textarea
            // rows={3}
            // style={{ width: "100%" }}
            // value={value}
            onChange={(e) => setValue(e.target.value)}
            // placeholder="Enter your fact"
          />
          <div className={styles.buttons}>
            <button type="button" onClick={onClose}>Cancel</button>
            <button>Add</button>
          </div>
        </form>
      </div>
    </div>
  );
}
