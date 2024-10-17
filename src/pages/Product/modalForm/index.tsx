import { Modal } from "@shopify/polaris";
import FormLayoutItem from "./formLayout";

interface ModalFormProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalForm = ({ active, setActive }: ModalFormProps) => {
  return (
    <div>
      <Modal
        open={active}
        onClose={() => setActive(false)}
        title="Product add"
        primaryAction={{
          content: "Save",
          onAction: () => {
            console.log("Save");
          },
        }}
        secondaryActions={[
          {
            content: "Cancel",
            onAction: () => {
              setActive(false);
            },
          },
        ]}
      >
        <Modal.Section>
          <FormLayoutItem />
        </Modal.Section>
      </Modal>
    </div>
  );
};

export default ModalForm;
