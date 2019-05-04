const { User } = require('../models')

class DashboardController {
  async index (req, res) {
    const { provider } = req.session.user

    if (provider) {
      return res.render('dashboard/providers')
    }

    const providers = await User.findAll({ where: { provider: true } })

    return res.render('dashboard/clients', { providers })
  }
}

module.exports = new DashboardController()
