import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormLabel,
  Input,
  FormControl,
  Slide,
  Text,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useToast } from "@chakra-ui/react";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { RxCrossCircled } from "react-icons/rx";
import { AuthContext } from "../Context/AuthContext";
import { UserRegister } from "./UserRegister";
export function UserLogin({ isOpen, onClose}) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = form;
    const storedData = JSON.parse(localStorage.getItem("userData")) || {};

    if (storedData.email === email && storedData.password === password) {
      localStorage.setItem("isAuth", "Authenticated");
       setIsAuth(true);
       console.log(isAuth);

      toast({
        title: "Successfully Logged In",
        status: "success",
        duration: 3000,
        isClosable: true,
        icon: <IoCheckmarkDoneCircle />,
        transition: Slide,
      });
      onClose()
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
    setForm({ email: "", password: "" });

  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign In</ModalHeader>
          <Text mx={6}>
            Sign in or create an account to enjoy FREE standard shipping on all
            orders.
          </Text>
          <ModalCloseButton />
          <ModalBody mt={5}>
            <form onSubmit={handleSubmit}>
              <FormControl>
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
              </FormControl>
               
              <input style={{borderRadius:"5px"}} type="submit" className="w-[30%] bg-black border to-black text-white mt-10" />
            </form>
          </ModalBody>

          <ModalFooter>
           
          </ModalFooter>
        </ModalContent>
        
      </Modal>
    </>
  );
}
