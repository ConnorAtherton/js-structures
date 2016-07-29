//
// Rewriting formatted expressions.
//
// Focus on operators with two operands to convert between infix, postfix, and prefix notation.
// The in- post- and pre- refer to the relative position of the operator with respect to the two
// operands.
//
// Infix: X + Y
// Postfix (Reverse Polish notation): X Y +
// Prefix (Polish notation): + X Y
//
// We only consider five binary operators here, with highest precedence first:
// - exponentiation ($)
// - multiplication (*)
// - division (/)
// - addition (+)
// - subtraction (-)
//

const operate = (operator, operand1, operand2) => {
  switch(operator) {
    case '$': return operand1 ** operand2
    case '/': return operand1 / operand2
    case '*': return operand1 * operand2
    case '+': return operand1 + operand2
    case '-': return operand1 - operand2
    default:
      throw new Error('Unknown operator:', operator)
  }
}

//
// Returns true if the first operator has higher precence than the second.
//
const { precedence, isOperator } = (() => {
  const table = {
    '+': 0,
    '-': 0,
    '/': 1,
    '*': 1,
    '$': 2,
  }

  const symbols = Object.keys(table)

  return {
    precedence(operator1, operator2) {
      return table[operator1] > table[operator2]
    },

    isOperator(operator) {
      return symbols.includes(operator)
    }
  }
})()

//
// We use postfix here because the order of the operators
// determines the actual order of operations.
//
const evaluatePostfix = (str) => {
  const expression = str.split('')
  const stack = []

  for (let i = 0, len = expression.length; i < len; i++) {
    let character = expression[i]

    if (/\d/.test(character)) {
      stack.push(character)
    } else {
      const operand1 = stack.pop()
      const operand2 = stack.pop()

      const result = operate(character, operand1, operand2)

      stack.push(result)
    }
  }

  // assert(stack.length === 1)

  return stack[0]
}

const infixToPostfix = (str) => {
  const expression = str.split('')
  const stack = []
  const postfix = []

  for (let i = 0, len = expression.length; i < len; i++) {
    let character = expression[i]

    if (isOperator(character)) {
      postfix.push(character)
    } else {

    }
  }

  // Append all remaining stack items to the postfix expression

  return postfix.join('')
}

const infixToPrefix = (str) => {

}

const prefixToInfix = (str) => {
  // TODO...
}

const prefixToPostfix = (str) => {
  // TODO...
}

const postfixToInfix = (str) => {
  // TODO...
}

const postfixToPrefix = (str) => {
  // TODO...
}

export default {
  infixToPostfix,
  infixToPrefix,
  prefixToInfix,
  prefixToPostfix,
  postfixToInfix,
  postfixToPrefix
}
