import Firebase from "../config/index";

const Repository = {
    categories: () => {
        return Firebase.firestore()
            .collection("categories")
            .get()
    }
}

export default Repository