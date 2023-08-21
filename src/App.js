import { CurrentUserLoader } from "./CurrentUSerLoader";
import { UserLoader } from "./UserLoader";
import { UserInfo } from "./UserInfo";
import { ResourceLoader } from "./ResourceLoader";
import { ProductInfo } from "./ProductInfo";

function App() {
	return (
		<>
			<ResourceLoader resourceUrl='/users/123' resourceName='user'>
				<UserInfo />
			</ResourceLoader>

			<ResourceLoader resourceUrl='/products/1234' resourceName='product'>
				<ProductInfo />
			</ResourceLoader>
		</>
	);
}

export default App;
