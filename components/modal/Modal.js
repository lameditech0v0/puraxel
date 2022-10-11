import { useState } from "react";

export default function Modal() {
  //   console.log(document.querySelector("#updateDetails"));
  const [dialogState, setDialogState] = useState(false);
  //   document.querySelector("#dialog");
  function Dialog() {
    return (
      <dialog id="dialog">
        <form method="dialogForm">
          <p>동의?</p>

          <div>
            <button
              id="cancel"
              type="reset"
              onClick={() => {
                const dialog = document.querySelector("#dialog");
                dialog.close();

                console.log("취소");
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                const dialog = document.querySelector("#dialog");
                dialog.close();

                console.log("전송");
              }}
            >
              Confirm
            </button>
          </div>
        </form>
      </dialog>
    );
  }

  //   const dialog = document.querySelector("#dialog");
  //   const updateButton = document.getElementById("updateDetails");
  //   const cancelButton = document.getElementById("cancel");

  function openChecker(dialog) {
    dialog.open ? console.log("open") : console.log("close");
  }

  return (
    <section>
      <div
        id="updateDetails"
        onClick={() => {
          const dialog = document.querySelector("#dialog");
          dialog.showModal();
          openChecker(dialog);
        }}
      >
        Update details
      </div>

      {<Dialog />}
    </section>
  );
}
