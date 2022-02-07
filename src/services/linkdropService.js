import LinkdropSDK from '@xeggo/drop-sdk'
import configs from '../../configs'
const config = configs.get('server')
const { FACTORY_ADDRESS, CHAIN } = config

class LinkdropService {
  async getProxyAddress (linkdropMasterAddress, campaignId) {
    const linkdropSDK = new LinkdropSDK({
      linkdropMasterAddress,
      factoryAddress: FACTORY_ADDRESS,
      chain: CHAIN
    })
    return linkdropSDK.getProxyAddress(campaignId)
  }
}

export default new LinkdropService()
