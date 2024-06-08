import { Button, Input, Text, FormControl, FormLabel } from "@chakra-ui/react";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { RxCrossCircled } from "react-icons/rx";
// Chakra UI modal
import {
  Slide,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useToast } from "@chakra-ui/react";
import { AuthContext } from "../Context/AuthContext";
import { UserLogin } from "./UserLogin";
export const UserRegister = ({ isOpen, onClose }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
  });



  const { setIsAuth } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = form;

    if (email.trim() && password.trim()) {
      localStorage.setItem("userData", JSON.stringify(form));
      setForm({ name: "", number: "", email: "", password: "" });

      toast({
        title: "Account created successfully, now ready to login",
        status: "success",
        duration: 3000,
        isClosable: true,
        icon: <IoCheckmarkDoneCircle />,
        transition: Slide,
      });

      
      setIsAuth(true);
      onClose();
      
      
      setShowLoginModal(true);

    } else {
      toast({
        title: "Please Enter Valid Credentails",
        status: "error",
        duration: 3000,
        isClosable: true,
        icon: <RxCrossCircled />,
        transition: Slide,
      });
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={16} fontWeight={600}>
            Create Account
          </ModalHeader>
          <ModalHeader mt={-5} fontFamily="initial" fontSize={38}>
            Beauty Insider
          </ModalHeader>
          <Text ml={7} fontSize={14}>
            Join the Beauty Insider loyalty program. Earn points, get{" "}
            <strong>FREE standard shipping</strong>, redeem rewards, and more.
          </Text>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  onChange={handleChange}
                  name="name"
                  value={form.name}
                  type="name"
                  placeholder="Enter your name"
                />
                <FormLabel>Number</FormLabel>
                <Input
                  onChange={handleChange}
                  name="number"
                  value={form.number}
                  type="number"
                  placeholder="Enter your number"
                />
                <FormLabel>Email address</FormLabel>
                <Input
                  onChange={handleChange}
                  name="email"
                  value={form.email}
                  type="email"
                  placeholder="Enter your Email"
                />
                <FormLabel>Password</FormLabel>
                <Input
                  onChange={handleChange}
                  name="password"
                  value={form.password}
                  type="password"
                  placeholder="Enter your Password"
                />

                <Button
                  width="full"
                  mt={4}
                  type="submit"
                  _hover={{ bg: "#595959" }}
                  color="white"
                  bg="black"
                  borderRadius="20px"
                >
                  Continue
                </Button>
              </FormControl>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
      {showLoginModal && (
        <UserLogin
          isOpen={showLoginModal}
          onClose={() => setShowLoginModal(false)}
        />
      )}
    </>
  );
};
