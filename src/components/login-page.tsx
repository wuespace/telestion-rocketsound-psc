import {
	LoginPage as TCLoginPage,
	LoginTitle,
	LoginLogo,
	LoginForm,
    LoginDescription
} from "@wuespace/telestion-client-common";

export function LoginPage(...props: any) {
	return (
		<TCLoginPage {...props}>
			<LoginLogo />
			<LoginTitle />
			<LoginDescription />
			<LoginForm initialServerURL="http://localhost:9870/bridge" />
		</TCLoginPage>
	);
}

LoginPage.routing = TCLoginPage.routing;
