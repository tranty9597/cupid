import { ApiProvider, DefaultApiProvider } from "@core"
import { RemoteAuthenticationDatasource, DefaultRemoteAuthenticationDatasource } from "@data"

export class AppMoudle {
    private static _instance: AppMoudle

    static get shared(): AppMoudle {
        if (!AppMoudle._instance) {
            AppMoudle._instance = new AppMoudle()
        }
        return AppMoudle._instance
    }

    apiProvider!: ApiProvider

    datasource!: RemoteAuthenticationDatasource

    private constructor() {
        this.intializeDatasource()
    }

    intializeDatasource() {
        this.apiProvider = new DefaultApiProvider({ baseURL: "https://cupid-api.now.sh" })
        this.datasource = new DefaultRemoteAuthenticationDatasource(this.apiProvider)
    }

}