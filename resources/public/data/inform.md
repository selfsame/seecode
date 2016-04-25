

### `github./com/selfsame/mud.tilde.town

_________

# ![](./data/img/mud.png)

>	@given(a("closed", "container"))
	def adjectives(e):
	  return "closed"

	@given(a("open", "container"))
	def adjectives(e):
	  return "open"

	@check("entity", a("closed", "container"))
	def close(a, b):
	  say("It's already closed.")
	  return False

	@given("entity", a("opened", "container"))
	def close(a, b):
	  b["closed"] = True
	  report("[Subject] close[s] [object].")