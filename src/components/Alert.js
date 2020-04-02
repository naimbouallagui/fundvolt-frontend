import { useEffect } from "react";
import { connect } from "react-redux";
import { useAlert } from "react-alert";

function Alert({ alertModal }) {
  const alert = useAlert();

  useEffect(() => {
    const { type, content } = alertModal;
    if (content) {
      //   alert.show(content);
      //   alert.remove({
      //     id: "string",
      //     message: "React.ReactNode",
      //     options: {
      //       type: "info",
      //       timeout: 400000,
      //       onOpen: () => {
      //         alert("open");
      //       },
      //       onClose: () => {
      //         alert("close");
      //       }
      //     },
      //     close: () => {
      //       alert("closed");
      //     }
      //   });
      switch (type) {
        case "error":
          alert.error(content);
          break;
        case "success":
        alert.success(content);
          break;
        default:
          break;
      }
      //   alert.error("error");
      //   alert.info("info");
    }

  }, [alertModal]);
  return null;
}

const mapStateToProps = ({ alert }) => ({ alertModal: alert });
export default connect(mapStateToProps, null)(Alert);
